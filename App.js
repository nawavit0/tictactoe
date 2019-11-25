import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TicTacToeHeader from './src/components/header';
import TicTacToeBoard from './src/components/board'

export default function App() {
  return (
    <View style={styles.container}>
      <TicTacToeHeader></TicTacToeHeader>
      <TicTacToeBoard></TicTacToeBoard>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },

});
