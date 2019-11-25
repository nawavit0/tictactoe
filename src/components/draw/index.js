import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function TicTacToeDraw({data}) {
    switch (data) {
        case 'o':
            return (
                <Image style={styles.container} source={require('../../assets/circle.png')}></Image>
            )
        case 'x':
            return (
                <Image style={styles.container} source={require('../../assets/cross.png')}></Image>
            )
        default:
            return (
                <Image style={styles.container}></Image>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
});