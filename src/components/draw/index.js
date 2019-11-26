import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {DRAW} from '../../utils/constants/gameConfig'

export default function TicTacToeDraw({data}) {
    switch (data) {
        case DRAW.CIRCLE:
            return (
                <Image style={styles.container} source={require('../../assets/circle.png')} />
            )
        case DRAW.CROSS:
            return (
                <Image style={styles.container} source={require('../../assets/cross.png')} />
            )
        default:
            return (
                <Image style={styles.container} />
            )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
});