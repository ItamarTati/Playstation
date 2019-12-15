import React from 'react';
import Input from './Input';

const Form = (props) => {
    return (
        <form onSubmit={props.handler}>
            <h3 className="form-title">{props.isEditForm === false ? `Add a Game` : `Editing Game: ${props.game.name}`}</h3>

            <div className="">
                <Input name="name"
                    placeholder="Enter the name of the game"
                    labelName="Name: "
                    handleChange={props.handleChange}
                    value={props.game.name} />
                <Input name="platform"
                    placeholder="Playstation 4"
                    labelName="Platform: "
                    handleChange={props.handleChange}
                    value={props.game.platform} />
                <Input name="genre"
                    placeholder="Enter genre of the game"
                    labelName="Genre: "
                    handleChange={props.handleChange}
                    value={props.game.genre} />
                <Input name="release"
                    placeholder="Enter the release date"
                    labelName="Date of Release: "
                    handleChange={props.handleChange}
                    value={props.game.release} />
                <Input name="players"
                    placeholder="Enter in the number of players"
                    labelName="No. of Players: "
                    handleChange={props.handleChange}
                    value={props.game.players} />
                <Input name="publisher"
                    placeholder="Enter the publisher of the game"
                    labelName="Publisher: "
                    handleChange={props.handleChange}
                    value={props.game.publisher} />
                <Input name="art"
                    placeholder="Enter the image URL"
                    labelName="Art Box: "
                    handleChange={props.handleChange}
                    value={props.game.art} />

            </div>
            <button type="submit" className="button add-update-button">{props.isEditForm === false ? "Add Game" : "Update Game"}</button>
        </form>
    )
}

export default Form;

