import React from 'react';
import { View, TextInput, Button, Text, ActivityIndicator, ToastAndroid } from 'react-native';
import HeaderComponent from '../../core/components/Header/Header';
import Api from '../../core/services/Api';
import styles from './styles';

export class HomePage extends React.Component {
  static navigationOptions = {
    headerTitle: <HeaderComponent />,
    headerStyle: {
      backgroundColor: '#4caf50',
    },
    headerTintColor: '#fff',
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchField: '',
      isLoading: false,
    };
  }
  search = () => {
    this.setState({ isLoading: true });
    Api.findUser(this.state.searchField).then(data => {
      this.setState({ data, isLoading: false });
      if (data.length === 0) {
        ToastAndroid.showWithGravityAndOffset('Ничего не найдено!', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
      } else {
        this.openProfile(data[0].username, data[0].id)
      }
    });
  };

  openProfile = (name, id) => {
    this.props.navigation.navigate({
      routeName: 'Profile',
      params: {
        header: name,
        id,
      },
      key: `Profile${id}`,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Поиск..."
          value={this.state.searchField}
          onChangeText={value => this.setState({ searchField: value })}
          style={styles.search}
          editable={true}
          maxLength={40}
        />
        <Button onPress={this.search} title="Найти" color="#4caf50" />
        {this.state.isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color="#4caf50" />
          </View>
        ) : null}
      </View>
    );
  }
}
