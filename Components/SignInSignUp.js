  import React, { Component } from 'react';
  import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
  import { StackNavigator } from 'react-navigation';
  import LogoTitle from './LogoTitle';

    class SignInSignUp extends Component {
      static navigationOptions = {
          // headerTitle: <LogoTitle />
          title: "Login"
      };
      constructor(){
        super();
        this.state={
          userName: '',
          passWord: ''
        }
      }
      render() {
        return (
          <View style={styles.mainView}>
            <View style={styles.imageView}>
              <Image
                source={require('../images/grape-frame.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.login}>
              <TextInput
                placeholder='Username'
                style={styles.input}
                value={this.state.userName}
                onChangeText={(user) => this.setState({userName: user})}
              />
              <TextInput
                placeholder='Password'
                style={styles.input}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(pass) => this.setState({passWord: pass})}
              />
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('SignUp')}
                  style={styles.touch}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touch}
                  onPress={() => this.props.navigation.navigate('GetStarted')}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }
    }

  export default SignInSignUp;

  const styles = StyleSheet.create({
    imageView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginTop: 40
    },
    image: {
      width: 400,
      height: 250,
    },
    login: {
      width: '85%',
      height: 230,
      marginLeft: '7.5%',
      borderRadius: 4,
      backgroundColor: '#dadada'
    },
    input: {
      width: '80%',
      height: 45,
      marginLeft: '10%',
      borderColor: '#c2c2c2',
      borderRadius: 4,
      borderWidth: 2,
      backgroundColor: '#f2f2f2',
      marginTop: 25,
      paddingLeft: 10,
      fontSize: 17
    },
    button: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 25
    },
    touch: {
      alignItems: 'center',
      backgroundColor: '#D5E9D5',
      padding: 8,
      width: 100,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#eaeaea'
    },
    buttonText: {
      color: '#1C0000',
      fontSize: 18,
      fontWeight: 'bold'
    }
  });
