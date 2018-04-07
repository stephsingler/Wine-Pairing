  import React, { Component } from 'react';
  import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Button } from
 'react-native';
  import Modal from 'react-native-modalbox';
  //Native Component
  import LogoTitle from './LogoTitle';

  import PropTypes from 'prop-types';

    class ChoseRed extends Component {
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

      renderReds = () => {
        return this.props.redWine.map((wine) => {
          return (
            <View key={wine.id}>
              <TouchableOpacity style={styles.imageView} onPress={() => {
                  return (
                    newPair = wine.pairings.map((pair) => {
                      return (
                        <View key={pair._id}>
                          <Image
                            source={{uri: `${pair.avatar}`}}
                            style={styles.cheeseImage}
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
                  source={{uri: `${wine.avatar}`}}
                  style={styles.image}
                />
                <Text style={styles.text}>{wine.name}</Text>
              </TouchableOpacity>
            </View>
          );
        });
      }
      render() {
        return (
            <ScrollView style={{height: 400}}>
              <Text style={styles.mainText}>Select a Red</Text>
              <View style={styles.mainView}>
                {this.renderReds()}
                <Modal
                  style={styles.modal}
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

ChoseRed.propTypes = {
  redWine: PropTypes.arrayOf(PropTypes.object)
};
export default ChoseRed;

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 8
  },
  imageView: {
    width: 73,
    height: 250,
    margin: 15
  },
  image: {
    width: 73,
    height: 250
  },
  text: {
    textAlign: 'center',
    fontSize: 13.5
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
    paddingTop: 5,
    paddingBottom: 30,
    backgroundColor: 'lightgray'
  },
  cheeseImage: {
    width: 120,
    height: 100,
    margin: 8
  },
  pairView: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
