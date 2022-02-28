import { useState } from 'react'
import allGames from '../games.js'

export default function Picker(props) {
    const [game, setGame] = useState({})
    const [loading, setLoading] = useState(false)
    function getGame() {
        const i = Math.floor(Math.random() * allGames.length)
        const game = allGames[i]
        setGame(game)
        setLoading(false)
    }

    function pickGame() {
        setLoading(true)
        setTimeout(() => getGame(), (800))
    }

    return (
        <div className='picker'>
            <div className='gameCard'>
                {!game.name ? <p>What are we playing tonight?</p> : <p>Looks like we're playing...</p>}
                {loading ? <img src='/image_processing20201020-1513-1a7pmsx.gif' style={{ width: 200 }} /> : <h1>{game.name}</h1>}
                <button onClick={pickGame}>Pick a game</button>
            </div>
        </div>
    )
}