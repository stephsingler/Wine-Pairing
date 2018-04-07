import React, { Component } from 'react';
import { StyleSheet, View, Image, Button, TouchableOpacity, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Native Components

  class Home extends Component {
    static navigationOptions = {
      title: "Welcome",
    };
    render() {
      return (
        <View style={styles.mainView}>
          <Image
            source={require('../images/wine-and-cheese.png')}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('GetStarted')}
            >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <Button
            title="About Us"
            onPress={() => this.props.navigation.navigate('AboutUs')}
            color="#1C0000"
            accessibilityLabel="About Us"
          />
        </View>
      );
    }
  }
export default Home;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#f2f2f2',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  image: {
    width: 300,
    height: 450,
    marginBottom: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1C0000',
    padding: 8,
    width: 220
  },
  buttonText: {
    color: '#f2f2f2',
    fontSize: 24
  }
});
