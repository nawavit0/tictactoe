import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native';
import TicTacToeDraw from '../draw'

export default function TicTacToeBoard({allowDraw}) {

    const [data, setData] = useState([
        {key: '1', value:''}, 
        {key: '2', value:''}, 
        {key: '3', value:''}, 
        {key: '4', value:''},
        {key: '5', value:''}, 
        {key: '6', value:''}, 
        {key: '7', value:''}, 
        {key: '8', value:''}, 
        {key: '9', value:''},
    ])
    
    const numColumns = 3

    renderItem = ({item, index}) => {
        return (
            <TouchableWithoutFeedback onPress={() => onPressOnBoard(item.key)}>
                <View style={styles.item}>
                    <TicTacToeDraw data={item.value}></TicTacToeDraw>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    onPressOnBoard = (key) => {
        setData(data.map((o) => {
            if(o.key===key) return {...o, value: allowDraw}
            return o
        }))
    }

    return (
        <View style={styles.container}>
            <FlatList data={data} style={styles.board} renderItem={this.renderItem} numColumns={numColumns} />
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
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
    },
  
});
  