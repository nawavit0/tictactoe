import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import {DRAW} from '../../utils/constants/gameConfig'

export default function TicTacToeDraw({data}) {
    switch (data) {
        case DRAW.CIRCLE:
            return (
                <Image style={styles.container} source={require('../../assets/circle.png')}></Image>
            )
        case DRAW.CROSS:
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