import React from 'react'
import GameAPI from './GameAPI'
import Form from './components/Form';
import Message from './components/Message';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            games: [],
            isEditForm: false,
            game: {
                name: "",
                platform: "",
                genre: "",
                release: "",
                players: "",
                publisher: "",
                art: ""
            },
            message: ""
        };
        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
    }

    componentDidMount() {
        GameAPI.getGames().then(data => {
            console.log(data);
            this.setState({ games: data.response })
        });
    }


    resetForm() {
        this.setState({
            game: {
                name: "",
                platform: "",
                genre: "",
                release: "",
                players: "",
                publisher: "",
                art: "",
            }
        });
    }
    handleChange(e) {
        this.setState({
            game: {
                ...this.state.game,
                [e.target.name]: e.target.value
            }
        });
    }
    showEditForm(game) {
        this.setState({ isEditForm: true, game: game });
    }

    async deleteHandler(id) {
        const deleteData = await GameAPI.deleteGame(id);
        const message = deleteData.message;
        if (message.msgError) {
            this.setState({ message });
        }
        else {
            const data = await GameAPI.getGames();
            this.setState({ message, games: data.response })
        }
    }

    async updateHandler(e) {
        e.preventDefault();
        const updateData = await GameAPI.updateGame(this.state.game);
        const message = updateData.message;
        if (message.msgError) {
            this.setState({ message });
        }
        else {
            const data = await GameAPI.getGames();
            this.setState({ message, games: data.response })
        }
        this.setState({ isEditForm: false });
        this.resetForm();
    }

    async addHandler(e) {
        e.preventDefault();
        const postData = await GameAPI.createGame(this.state.game);
        const message = postData.message;
        if (message.msgError) {
            this.setState({ message });
        }
        else {
            const data = await GameAPI.getGames();
            this.setState({ message, games: data.response });
        }
        this.resetForm();
    }
    renderMessage() {
        if (this.state.message === "")
            return null;
        return (
            <Message message={this.state.message} />
        );
    }

    render() {
        return (
            <div>
                <div id="top" className='title'>
                    <h1 >PlayStation Game Library</h1>
                    <h2>The Best Place to Play!</h2>
                    <h3>This is for the Players!!</h3>
                </div>
                <div className="form-box">
                    <Form isEditForm={this.state.isEditForm}
                        game={this.state.game}
                        handleChange={this.handleChange}
                        handler={!this.state.isEditForm ? this.addHandler : this.updateHandler} />
                </div>
                {(this.state.message === "") ? null : <Message message={this.state.message} />}
                <h1 className="sub-title">Games</h1>
                {this.state.games.map((game) =>
                    <div className="card card-1">
                        <img className="box-art" src={game.art} alt={game.name} />
                        <h2>{game.name}</h2>
                        <div className="list">
                            <p>Platform: {game.platform}</p>
                            <p>Genre: {game.genre}</p>
                            <p>Release Date: {game.release}</p>
                            <p>No. of Players: {game.players}</p>
                            <p>Publisher: {game.publisher}</p>
                        </div>
                        <a href="#top"><button type="button" onClick={this.showEditForm.bind(this, game)} className="button view-button">View Game</button></a>
                        <a href="#top"><button type="button" onClick={this.deleteHandler.bind(this, game._id)} className="button delete-button">Delete Game</button></a>
                        <div>
                        </div>
                    </div>
                )}
            </div>

        )

    }
}


export default App;

