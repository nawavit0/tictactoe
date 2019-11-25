import React from 'react';
import { StyleSheet, Image, YellowBox } from 'react-native';

export default function TicTacToeDraw({data}) {
    let drawImage
    switch (data) {
        case 'o':
            drawImage = require('../../assets/circle.png')
            break;
        case 'x':
            drawImage = require('../../assets/cross.png')
            break;
        default:
            break;
    }
    return (
        <Image style={styles.container} source={drawImage}></Image>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
});