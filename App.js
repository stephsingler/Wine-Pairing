import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
//Native Components
import Home from './Components/Home';
import GetStarted from './Components/GetStarted';
import AboutUs from './Components/AboutUs';
import ChoseRedContainer from './containers/ChoseRedContainer';
import ChoseWhiteContainer from './containers/ChoseWhiteContainer';
import ChoseCheeseContainer from './containers/ChoseCheeseContainer';


const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    GetStarted: {
      screen: GetStarted,
    },
    AboutUs: {
      screen: AboutUs,
    },
    ChoseRed: {
      screen: ChoseRedContainer,
    },
    ChoseWhite: {
      screen: ChoseWhiteContainer,
    },
    ChoseCheese: {
      screen: ChoseCheeseContainer,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTintColor: "#1C0000",
    },
  }
);

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
