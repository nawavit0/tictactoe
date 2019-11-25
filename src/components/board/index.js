import React from 'react';
import { StyleSheet, View, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native';
import TicTacToeDraw from '../draw'

export default function TicTacToeBoard({board, allowDraw, onDrawPress, isPlaying}) {
    const numColumns = 3

    renderItem = ({item, index}) => {
        return (
            <TouchableWithoutFeedback onPress={() => onDrawPress(item.key, allowDraw)} disabled={!isPlaying}>
                <View style={item.isHighlight ? styles.itemHighlight : styles.item}>
                    <TicTacToeDraw data={item.value}></TicTacToeDraw>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={board} style={styles.board} renderItem={this.renderItem} numColumns={numColumns} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#cc6699',
        marginTop: 30,
    },
    board: {
        flexGrow: 0,
    },
    item: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        height: (Dimensions.get('window').width*(80/100))  / 3,
        width: (Dimensions.get('window').width*(80/100)) / 3,
    },
    itemHighlight: {
        backgroundColor: '#99ffcc',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        height: (Dimensions.get('window').width*(80/100))  / 3,
        width: (Dimensions.get('window').width*(80/100)) / 3,
    },
  
});
  