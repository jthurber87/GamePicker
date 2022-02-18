import { useState, useEffect } from 'react'
import allGames from '../games.js'
const axios = require('axios')

export default function Finder() {
    const [gameSearch, setGameSearch] = useState()
    const [input, setInput] = useState("")


    async function handleSubmit(e) {
        const names = allGames.map(game => game.name)
        await axios.get(`https://api.boardgameatlas.com/api/search?name=${input}&client_id=tub0iinjUh&limit=5`)
            .then(res => { setGameSearch(res.data.games.filter(game => !names.includes(game))) })
            .catch(error => console.log(error))
    }

    function handleInput(e) {
        setInput(e.target.value)
    }

    function handleClick(e) {
        const names = allGames.map(game => game.name)
        if (names.includes(e.target.innerText)) {
            alert(`${e.target.innerText} is already in your collection.`)
        } else {
            alert(`${e.target.innerText} added to games`)
            let game = gameSearch.find(game => game.name === e.target.innerText)
            allGames.push({ name: game.name, players: [game.min_players, game.max_players] })
            setInput("")
        }
    }

    useEffect(() => {
        handleSubmit()
    }, [input])

    return (
        <div className='finder'>
            {/* <h4>Add a game:</h4> */}
            <form>
                <input placeholder="Add a game..." value={input} onChange={handleInput} onSubmit={handleSubmit} />
            </form>
            <ul>
                {gameSearch ?
                    gameSearch.map((results, idx) => {
                        return (
                            <li key={idx} onClick={handleClick} style={{ justifyContent: 'flex-start' }}>{results.name}</li>
                        )
                    })
                    :
                    <ul>
                        <li>
                            <div className="gooey">
                                <span className="dot"></span>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gooey">
                                <span className="dot"></span>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gooey">
                                <span className="dot"></span>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gooey">
                                <span className="dot"></span>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gooey">
                                <span className="dot"></span>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                }
            </ul>
        </div >
    )
}