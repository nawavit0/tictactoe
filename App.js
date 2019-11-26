import React, {useState} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import TicTacToeHeader from './src/components/header';
import TicTacToeBoardController from './src/components/boardController'
import {DRAW, PLAYER_TYPE, GAME_MODE} from './src/utils/constants/gameConfig'

const players = [{
  name: 'Player1',
  draw: DRAW.CIRCLE,
  type: PLAYER_TYPE.PLAYER,
},{
  name: 'Player2',
  draw: DRAW.CROSS,
  type: PLAYER_TYPE.PLAYER,
}]

const playerWithBot = [{
  name: 'Player',
  draw: DRAW.CIRCLE,
  type: PLAYER_TYPE.PLAYER,
},{
  name: 'Bot',
  draw: DRAW.CROSS,
  type: PLAYER_TYPE.BOT,
}]

export default function App() {

  const [mode, setMode] = useState(GAME_MODE.MULTIPLAYER)

  onModePress = () => {
    if (mode === GAME_MODE.MULTIPLAYER) {
      setMode(GAME_MODE.SINGLEPLAYER)
    } else {
      setMode(GAME_MODE.MULTIPLAYER)
    }
  }
  
  return (
    <View style={styles.container}>
      <TicTacToeHeader />
      <TicTacToeBoardController listPlayer={mode===GAME_MODE.MULTIPLAYER ? players : playerWithBot} />
      <Button
                title={mode===GAME_MODE.MULTIPLAYER ? 'Start Game with Bot' : 'Start Game with Friend'}
                color='#999999'
                onPress={() => onModePress()}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },

});
