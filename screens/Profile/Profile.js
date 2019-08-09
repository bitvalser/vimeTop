import React from 'react';
import { View, Text, RefreshControl, ScrollView, FlatList, Image } from 'react-native';
import HeaderComponent from '../../core/components/Header/Header';
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
    };
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    this.setState({ id });
    this.loadProfile(id);
  }

  loadProfile = id => {
    this.setState({ isLoading: true });
    Api.getUserStats(id).then(data => {
      this.setState({ data, isLoading: false });
    });
  };

  getStats = type => {
    const { stats } = this.state.data;
    return Object.keys(stats).reduce((acc, val) => [...acc, { name: val, ...stats[val][type] }], []);
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={this.state.isLoading} onRefresh={() => this.loadProfile(this.state.id)} />
        }
      >
        {!this.state.isLoading && this.state.data.user ? <ProfileCardComponent data={this.state.data.user} /> : null}
        {!this.state.isLoading && this.state.data.stats ? (
          <FlatList
            data={this.getStats('global')}
            keyExtractor={(item, index) => `stat${item.name}`}
            renderItem={({ item }) => <StatCardComponent data={item} />}
          />
        ) : null}
      </ScrollView>
    );
  }
}
