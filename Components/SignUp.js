import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';


  class SignUp extends Component {
    static navigationOptions = {
        title: "Sign Up"
    };
    constructor(){
      super();
      this.state = {
        fullName: '',
        userName: '',
        passWord: '',
        message: ""
      }
    }
    handleSignUp = () => {
      fetch('http://localhost:3001/users', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state)
      }).then(() => console.log('working'));
      this.setState({fullName: '', userName: '', passWord: '', message: "Sign Up Successful!"})
    };

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
              placeholder="FullName"
              style={styles.input}
              onChangeText={(name) => this.setState({fullName: name})}
              value={this.state.fullName}
            />
            <TextInput
              placeholder='Username'
              style={styles.input}
              onChangeText={(user) => this.setState({userName: user})}
              value={this.state.userName}
            />
            <TextInput
              placeholder='Password'
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(pass) => this.setState({passWord: pass})}
              value={this.state.passWord}
            />
            <Text style={styles.message}>{this.state.message}</Text>
            <View style={styles.button}>
              <View style={styles.flex}>
                <TouchableOpacity
                  onPress={this.handleSignUp}
                  style={styles.touch}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('SignInSignUp')}
                  style={styles.touch}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.smallText}>Login after you sign up.</Text>
            </View>
          </View>
        </View>
      );
    }
  }

export default SignUp;

const styles = StyleSheet.create({
  imageView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20
  },
  image: {
    width: 400,
    height: 250,
  },
  login: {
    width: '85%',
    height: 330,
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
  message: {
    textAlign: 'center'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 25
  },
  flex: {
    display: 'flex',
    flexDirection: 'row'
  },
  touch: {
    alignItems: 'center',
    backgroundColor: '#D5E9D5',
    padding: 8,
    width: 100,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#eaeaea',
    marginRight: 10,
    marginLeft: 10
  },
  buttonText: {
    color: '#1C0000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  smallText: {
    fontSize: 12,
    marginTop: 10
  }
});
