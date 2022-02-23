import allGames from "../games"

export default function Collection(props) {

    const collection = allGames.map(game => {
        return (<><td>{game.name}</td><td>{game.min_players}</td></>)
    })
    return (
        <table>
            <tr>
                <thead>Name</thead>
            </tr>
            <tr>
                {collection}
            </tr>
        </table>
    )
}