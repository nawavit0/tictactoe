import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';

export default function TicTacToeHeader() {
  return (
    <View style={styles.container}>
            <Text style={styles.topic}>Tic Tac Toe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        color: 'black',
        top: 0,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    topic: {
        marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight + 20,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 20,
    }
  
});
  