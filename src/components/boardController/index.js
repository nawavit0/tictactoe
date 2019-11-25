import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TicTacToeBoard from '../board'
import TicTacToePlayer from '../player'
import { PLAYER_TYPE } from '../../utils/constants/gameConfig'

const initFullBoard = [
    {key: 1, value:'', isHighlight: false}, 
    {key: 2, value:'', isHighlight: false}, 
    {key: 3, value:'', isHighlight: false}, 
    {key: 4, value:'', isHighlight: false},
    {key: 5, value:'', isHighlight: false}, 
    {key: 6, value:'', isHighlight: false}, 
    {key: 7, value:'', isHighlight: false}, 
    {key: 8, value:'', isHighlight: false}, 
    {key: 9, value:'', isHighlight: false},
]

export default function TicTacToeBoardController({listPlayer}) {

    const [turn, setTurn] = useState(1)
    const [fullBoard, setFullBoard] = useState(initFullBoard)
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

    useEffect(() => {
        const currentPlayer = listPlayer[(turn-1)%listPlayer.length]
        if(currentPlayer.type===PLAYER_TYPE.BOT){
            setIsPlaying(false)
            onDrawPress(getBestMove(fullBoard, currentPlayer.draw, currentPlayer).key, currentPlayer.draw)
            setIsPlaying(true)
        }
    }, [turn]);

    onInit = () => {
        setTurn(1)
        setFullBoard(initFullBoard)
        setIsPlaying(true)
        setIsWinning(false)
        setIsDrawing(false)
        setMessage('')
    }

    onDraw = (board, key, allowDraw) => {
        return board.map((o) => {
            if(o.key===key && o.value==='') {
                return {...o, value: allowDraw}
            }
            return o
        })
    }

    onDrawPress = (key, allowDraw) => {
        let canDraw = fullBoard.some((box) => {
            return box.key === key && box.value === ''
        })
        if(canDraw){
            let newBoard = onDraw(fullBoard, key, allowDraw)
            pathWin = checkWin(newBoard, allowDraw)
            if(pathWin.length > 0) {
                newBoard = highlightWin(newBoard, pathWin[0])
                setIsPlaying(false)
                setIsWinning(true)
            }
            else {
                checkDraw()
            }
            setFullBoard(newBoard)
        }
    }

    checkDraw = () => {
        if(turn === fullBoard.length) setIsDrawing(true)
        else setTurn(turn+1)
    }

    checkWin = (board, allowDraw) => {
        const pathWin = listWins.filter((win) => {
            return win.every((key) => {
                const obj = board.find((o) => {
                    return o.key === key
                })
                return !!obj ? obj.value === allowDraw : false
            })
        })
        return pathWin
    }

    highlightWin = (board, pathWin) => {
        return board.map((o) => {
            if(pathWin.includes(o.key)) return {...o, isHighlight: true}
            return o
        })
    }

    getEmptyBoxes = (board) => {
        return board.filter((o) => {
            return o.value === ''
        })
    }

    getBestMove = (board, allowDraw, player) => {
        const emptyBoxes = getEmptyBoxes(board)
        const rivalPlayer = listPlayer.find((eachPlayer) => {
            return eachPlayer.draw !== player.draw
        })
        if (checkWin(board, player.draw).length > 0) {
            return { score: 10 }
        } else if (checkWin(board, rivalPlayer.draw).length > 0) {
            return { score: -10 }
        } else if (emptyBoxes.length === 0) {
            return { score: 0 }
        }

        let moves = []
        for (const [index, emptyBox] of emptyBoxes.entries()) {
            let move = {}
            move.key = emptyBox.key
            newBoardTemp = onDraw(board, emptyBox.key, allowDraw)
            const result = getBestMove(newBoardTemp, allowDraw===player.draw ? rivalPlayer.draw : player.draw, player)
            move.score = result.score
            moves.push(move)
        }

        if (allowDraw === player.draw) {
            const best = moves.reduce((bestMove, move) => {
                return bestMove.score > move.score ? bestMove : move
            })
            return best
        } else {
            const best = moves.reduce((bestMove, move) => {
                return bestMove.score < move.score ? bestMove : move
            })
            return best
        }
    }
    
    return (
        <View style={styles.container}>
            <TicTacToeBoard 
                board={fullBoard} 
                allowDraw={listPlayer[(turn-1)%listPlayer.length].draw} 
                onDrawPress={onDrawPress}
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
            <Button
                title='New Game'
                color='#f194ff'
                onPress={() => onInit()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },

});
