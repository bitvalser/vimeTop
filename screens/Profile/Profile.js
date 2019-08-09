import React from 'react';
import { View, Text, RefreshControl, ScrollView, FlatList, Image } from 'react-native';
import HeaderComponent from '../../core/components/Header/Header';
import SegmentedControlComponent from '../../core/components/SegmentedControl/SegmentedControl';
import StatCardComponent from './components/StatCard/StatCard';
import ProfileCardComponent from './components/ProfileCard/ProfileCard';
import Api from '../../core/services/Api';
import styles from './styles';

export class ProfilePage extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderComponent title={navigation.state.params.header} />,
    headerStyle: {
      backgroundColor: '#4caf50',
    },
    headerTintColor: '#fff',
  });

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      data: {},
      isLoading: false,
      selectedIndex: 0,
    };
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    this.setState({ id: id });
    this.loadProfile(id);
  }

  loadProfile = id => {
    this.setState({ isLoading: true });
    Api.getUserStats(id).then(data => {
      this.setState({ data, isLoading: false });
    });
  };

  getGlobalStats = () => {
    const { stats } = this.state.data;
    return Object.keys(stats).reduce((acc, val) => [...acc, { name: val, ...stats[val].global }], []);
  };

  getSeasonStats = date => {
    const { stats } = this.state.data;
    return Object.keys(stats)
      .filter(game => !!stats[game].season)
      .reduce((acc, val) => [...acc, { name: val, ...stats[val].season[date] }], []);
  };

  selectSegment = val => {
    this.setState({ selectedIndex: val });
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={this.state.isLoading} onRefresh={() => this.loadProfile(this.state.id)} />
        }
      >
        {!this.state.isLoading ? (
          <View>
            {this.state.data.user ? <ProfileCardComponent data={this.state.data.user} /> : null}
            <SegmentedControlComponent
              onChange={this.selectSegment}
              selected={this.state.selectedIndex}
              segments={['Всё время', 'Месяц']}
            />
            {this.state.data.stats ? (
              <FlatList
                data={this.state.selectedIndex === 0 ? this.getGlobalStats() : this.getSeasonStats('monthly')}
                keyExtractor={(item, index) => `stat${item.name}`}
                renderItem={({ item }) => <StatCardComponent data={item} />}
              />
            ) : null}
          </View>
        ) : null}
      </ScrollView>
    );
  }
}
