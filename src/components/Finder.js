import { useState, useEffect } from 'react'
import allGames from '../games.js'
const axios = require('axios')

export default function Finder() {
    const [gameSearch, setGameSearch] = useState()
    const [input, setInput] = useState("")

    async function handleSubmit(e) {
        await axios.get(`https://api.boardgameatlas.com/api/search?name=${input}&client_id=tub0iinjUh&limit=5`)
            .then(res => { setGameSearch(res.data.games) })
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
            allGames.push({ name: e.target.innerText, players: 0 })
            setInput("")
        }
    }

    useEffect(() => {
        handleSubmit()
    }, [input])

    return (
        <div className='finder'>
            <form>
                <input placeholder="Add a game..." value={input} onChange={handleInput} onSubmit={handleSubmit} />
            </form>
            <ul>
                {gameSearch ?
                    gameSearch.map((results, idx) => {
                        return (
                            <li key={idx} onClick={handleClick}> {results.name}</li>
                        )
                    })
                    :
                    <ul>
                        <li style={{ paddingLeft: -20 }}>
                            <div className="gooey">
                                <span className="dot"></span>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </li>
                        <li style={{ paddingLeft: -20 }}>
                            <div className="gooey">
                                <span className="dot"></span>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </li>
                        <li style={{ paddingLeft: -20 }}>
                            <div className="gooey">
                                <span className="dot"></span>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </li>
                        <li style={{ paddingLeft: -20 }}>
                            <div className="gooey">
                                <span className="dot"></span>
                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </li>
                        <li style={{ paddingLeft: -20 }}>
                            <div className="gooey">
                                <span className="dot"></span>
                                <div className="dots">
                                    <span></span>
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