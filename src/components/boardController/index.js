import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TicTacToeBoard from '../board'
import TicTacToePlayer from '../player'

export default function TicTacToeBoardController({listPlayer}) {

    const [turn, setTurn] = useState(1)
    const [data, setData] = useState([
        {key: 1, value:'', isHighlight: false}, 
        {key: 2, value:'', isHighlight: false}, 
        {key: 3, value:'', isHighlight: false}, 
        {key: 4, value:'', isHighlight: false},
        {key: 5, value:'', isHighlight: false}, 
        {key: 6, value:'', isHighlight: false}, 
        {key: 7, value:'', isHighlight: false}, 
        {key: 8, value:'', isHighlight: false}, 
        {key: 9, value:'', isHighlight: false},
    ])
    const [message, setMessage] = useState('')
    const [isPlaying, setIsPlaying] = useState(true)
    const [isWinning, setIsWinning] = useState(false)
    const [isDrawing, setIsDrawing] = useState(false)
    const listWins = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7],
    ]

    onDraw = (key, allowDraw) => {
        let canDraw = false
        let newData = data.map((o) => {
            if(o.key===key && o.value==='') {
                canDraw = true
                return {...o, value: allowDraw}
            }
            return o
        })
        if(canDraw){
            pathWin = checkWin(newData, allowDraw)
            if(pathWin.length > 0) {
                newData = highlightWin(newData, pathWin[0])
                setIsPlaying(false)
                setIsWinning(true)
            }
            else {
                checkDraw()
            }
        }
        setData(newData)
    }

    checkDraw = () => {
        console.log('turn', turn)
        if(turn === data.length) setIsDrawing(true)
        else setTurn(turn+1)
    }

    checkWin = (data, allowDraw) => {
        const pathWin = listWins.filter((win) => {
            return win.every((key) => {
                const obj = data.find((o) => {
                    return o.key === key
                })
                return !!obj ? obj.value === allowDraw : false
            })
        })
        return pathWin
    }

    highlightWin = (data, pathWin) => {
        return data.map((o) => {
            if(pathWin.includes(o.key)) return {...o, isHighlight: true}
            return o
        })
    }

    gameWin = (pathWin) => {
        highlightWin(pathWin)
    }
    
    return (
        <View style={styles.container}>
            <TicTacToeBoard 
                data={data} 
                allowDraw={listPlayer[(turn-1)%listPlayer.length].draw} 
                onDraw={onDraw}
                isPlaying={isPlaying}
            >
            </TicTacToeBoard>
            <Text>{message}</Text>
            {
                listPlayer.map((player,index) => {
                    return (
                        <TicTacToePlayer 
                            key={index} 
                            name={player.name} 
                            draw={player.draw} 
                            type={player.type} 
                            isActive={index===(turn-1)%listPlayer.length}
                            isWin={isWinning && index===(turn-1)%listPlayer.length}
                            isDraw={isDrawing}
                        >
                        </TicTacToePlayer>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },

});
