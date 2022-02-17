import { useState } from 'react'
import allGames from '../games.js'

export default function Picker() {
    const [game, setGame] = useState({
        name: "",
        players: [""]
    })
    function getGame() {
        const i = Math.floor(Math.random() * allGames.length)
        console.log(i)
        const game = allGames[i]
        setGame(game)
    }

    return (
        <div className='gameCard' onClick={() => setTimeout(() => { getGame() }, (800))}>
            <p>Looks like we're playing...</p>
            <h1>{game.name}</h1>
            {game.players.length === 2 ? <h3>Players: <br />{game.players[0]} - {game.players[1]}</h3> : <h3>Players: <br />{game.players[0]}</h3>}
            {/* // <button onClick={() => getGame()}>Game</button> */}
        </div>
    )
}