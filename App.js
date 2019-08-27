import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './src/actions';

const App = ({counter, incrementCounter, decrementCounter}) => (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <TouchableOpacity style={styles.button} onPress={incrementCounter}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Counter: {counter}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={decrementCounter}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
);

const mapStateToProps = ({counterReducer}) => ({
    counter: counterReducer.counter,
    isAuth: counterReducer.isAuth,
});

const mapDispatchToProps = {
  incrementCounter: actions.incrementCounter,
  decrementCounter: actions.decrementCounter,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
