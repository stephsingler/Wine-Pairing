  import React, { Component } from 'react';
  import { StyleSheet, ScrollView, Text } from 'react-native';
  //Native Components
  import LogoTitle from './LogoTitle'

    export default class AboutUs extends Component {
      static navigationOptions = {
        headerTitle: <LogoTitle />
      }
      render() {
        return (
          <ScrollView style={{height: 1500, padding: 20}}>
              <Text style={styles.title}>Hello There!</Text>
              <Text style={styles.text}>This app was created for the everyday shopper that finds themself blankly staring at the wine shelf, or roaming around the Whole Foods cheese section for hours. We wanted to make finding that perfect wine and cheese pairing as simple as possible.</Text>
              <Text style={styles.text}>All you have to do is select either a wine variety or type of cheese and we will simply give you a few pairing options. Nothing fancy or complicated here.</Text>
              <Text style={styles.text}>If you are practically a sommelier or a connoisseur of cheese...this app is NOT for you. If the wine cannot be found in Whole Foods or Costco, it is most likely not on this list.</Text>
          </ScrollView>
        );
      }
    }
  const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      fontFamily: 'Cochin',
      fontSize: 28,
      marginTop: 20,
      marginBottom: 10
    },
    text: {
      textAlign: 'center',
      fontFamily: 'Cochin',
      fontSize: 22,
      marginBottom: 15
    }
  });
