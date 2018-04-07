  import React, { Component } from 'react';
  import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
  //Native Components
  import LogoTitle from './LogoTitle';

  export default class GetStarted extends Component {
    static navigationOptions = {
      headerTitle: <LogoTitle />
    };
    render() {
      return (
        <View style={styles.mainView}>
          <Text style={styles.text}>Select a Wine</Text>
          <View style={styles.wineView}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ChoseRed')}>
              <Image
                source={require('../images/red-wine.png')}
                style={styles.wine}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ChoseWhite')}>
              <Image
                source={require('../images/white-wine.png')}
                style={styles.wine}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>OR</Text>
          <View style={styles.cheeseView}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ChoseCheese')}>
              <Image
                source={require('../images/cheese.png')}
                style={styles.cheese}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    mainView: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f2f2f2'
    },
    wineView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      height: 'auto',
      padding: 10
    },
    cheeseView: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 20
    },
    wine: {
      width: 100,
      height: 250
    },
    cheese: {
      width: 200,
      height: 180
    },
    text: {
      textAlign: 'center',
      fontFamily: 'Cochin',
      fontSize: 22,
      color: "#1C0000",
      marginTop: 20
    }
  });
