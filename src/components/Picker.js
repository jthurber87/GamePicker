import { useState } from 'react'
import allGames from '../games.js'

export default function Picker() {
    const [game, setGame] = useState({
        name: "",
        players: [null]
    })
    function getGame() {
        const i = Math.floor(Math.random() * allGames.length)
        const game = allGames[i]
        setGame(game)
    }

    return (
        <div className='picker'>
            <div className='gameCard'>
                {game.name ? <p>Looks like we're playing...</p> : <p>What are we playing tonight?</p>}
                <h1>{game.name}</h1>
                {game.players[0] === null ? <></> : <h3>Players:</h3>}
                {game.players.length === 2 ? <h4>{game.players[0]} - {game.players[1]}</h4> : <h4>{game.players[0]}</h4>}
                <button onClick={() => setTimeout(() => { getGame() }, (800))}>Pick a game</button>
            </div>
        </div>
    )
}