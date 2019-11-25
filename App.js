import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TicTacToeHeader from './src/components/header';
import TicTacToeBoardController from './src/components/boardController'
import {DRAW, PLAYER_TYPE} from './src/utils/constants/gameConfig'

export default function App() {

  const players = [{
    name: 'Bird',
    draw: DRAW.CIRCLE,
    type: PLAYER_TYPE.PLAYER,
  },{
    name: 'Proud',
    draw: DRAW.CROSS,
    type: PLAYER_TYPE.PLAYER,
  }]
  
  return (
    <View style={styles.container}>
      <TicTacToeHeader></TicTacToeHeader>
      <TicTacToeBoardController listPlayer={players}></TicTacToeBoardController>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },

});
