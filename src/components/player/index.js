import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default function TicTacToePlayer({name, draw, type, isActive, isWin, isDraw}) {

    getGameStatus = (isWin, isDraw) => {
        if(isWin) return '~ Win ~'
        else if(isDraw) return ' ~ Draw ~'
        else return ''
    }

    return (
        <View style={styles.container}>
            <Text style={styles.profile}>{`${name} [${draw}]`}</Text>
            <Text style={styles.game}>{getGameStatus(isWin,isDraw)}</Text>
            <Text style={isActive ? styles.statusActive : styles.statusInactive}>•</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 10,
        height: 40,
        width: Dimensions.get('window').width*(80/100),
        borderWidth: 1,
        borderColor: '#d9d9d9',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profile: {
        flex: 1,
        textAlign: 'left',
    },
    game: {
        flex: 1,
        textAlign: 'center',
    },
    statusActive: {
        flex: 1,
        textAlign: 'right',
        color: '#00cc00',
        fontWeight: 'bold',
        fontSize: 40,
    },
    statusInactive: {
        flex: 1,
        textAlign: 'right',
        color: '#666666',
        fontWeight: 'bold',
        fontSize: 40,
    }
});


  