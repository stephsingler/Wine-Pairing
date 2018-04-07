  import React, { Component } from 'react';
  import { Image, StyleSheet } from 'react-native';

    export default class LogoTitle extends Component {
      render() {
        return (
          <Image
            source={require('../images/wine-barrel-sign.png')}
            style={styles.image}
          />
        );
      }
    }
  const styles = StyleSheet.create({
    image: {
      width: 40,
      height: 40
    }
  });
