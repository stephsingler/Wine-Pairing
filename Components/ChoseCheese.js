  import React, { Component } from 'react';
  import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
  import Modal from 'react-native-modalbox';
  //Native Components
  import LogoTitle from './LogoTitle';

  import PropTypes from 'prop-types'

  class ChoseCheese extends Component {
      static navigationOptions = {
        headerTitle: <LogoTitle />
      };

      constructor() {
        super();
        this.state = {
          pairings: [],
          isOpen: false,
          isDisabled: false,
          swipeToClose: true
        }
      }
      renderCheeses = () => {
        return this.props.cheeseList.map((cheese) => {
          return (
            <View key={cheese.id}>
              <TouchableOpacity style={styles.imageView} onPress={() => {
                  return (
                    newPair = cheese.pairings.map((pair) => {
                      return (
                        <View key={pair._id}>
                          <Image
                            source={{uri: `${pair.avatar}`}}
                            style={styles.wineImage}
                          />
                          <Text style={styles.text}>{pair.name}</Text>
                        </View>
                      )
                    }),
                    this.setState({pairings: newPair}),
                    this.refs.modal1.open()
                  )
              }}>
                <Image
                  source={{uri: `${cheese.avatar}`}}
                  style={styles.image}
                />
                <Text style={styles.text}>{cheese.name}</Text>
              </TouchableOpacity>
            </View>
          );
        });
      }
      render() {
        return (
          <ScrollView style={{height: 1500}}>
            <Text style={styles.mainText}>Select a Cheese</Text>
            <View style={styles.mainView}>
              {this.renderCheeses()}
              <Modal
                style={styles.modal}
                position={'center'}
                ref={'modal1'}
                swipeToClose={this.state.swipeToClose}>
                <View>
                  <Text style={styles.pairText}>Pair With</Text>
                  <View style={styles.pairView}>{this.state.pairings}</View>
                </View>
              </Modal>
            </View>
          </ScrollView>
        );
      }
    }

ChoseCheese.propTypes = {
  cheeseList: PropTypes.arrayOf(PropTypes.object)
};

export default ChoseCheese;

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 8
  },
  imageView: {
    width: 120,
    height: 100,
    margin: 15,
    marginBottom: 20
  },
  image: {
    width: 120,
    height: 100
  },
  text: {
    textAlign: 'center',
    fontSize: 14
  },
  mainText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Cochin',
    marginTop: 8
  },
  modal: {
    height: 'auto',
    width: 380,
    paddingTop: 50,
    paddingBottom: 70,
    backgroundColor: 'lightgray',
    alignItems: 'center'
  },
  wineImage: {
    width: 100,
    height: 250,
    margin: 8
  },
  pairView: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  pairText: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize: 18
  }
});
