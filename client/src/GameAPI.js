export default {
    getGames: () => {
        return fetch('/game')
            .then(res => res.json())
            .then(data => data);
    },
    deleteGame: (_id) => {
        return fetch(`/game/${_id}`,
            { method: 'delete' })
            .then(res => res.json())
            .then(data => data);
    },
    updateGame: (game) => {
        return fetch(`/game/${game._id}`,
            {
                method: "put",
                body: JSON.stringify(game),
                json: { status: true },
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
            .then(data => data);
    },
    createGame: (game) => {
        return fetch(`/game`,
            {
                method: 'post',
                body: JSON.stringify(game),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
            .then(data => data);
    }
}



