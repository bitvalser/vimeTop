import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { HomePage } from './screens/Home/Home';
import { ProfilePage } from './screens/Profile/Profile';

const RootStack = createStackNavigator(
  {
    Home: { screen: HomePage },
    Profile: { screen: ProfilePage },
  },
  {
    initialRouteName: 'Home',
  }
);

const Router = createAppContainer(RootStack);

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return <Router />;
  }
}
