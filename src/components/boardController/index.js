import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TicTacToeBoard from '../board'

export default function TicTacToeBoardController() {
  return (
    <View style={styles.container}>
      <TicTacToeBoard allowDraw={'o'}></TicTacToeBoard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },

});
