const express = require('express');
const gameRouter = express.Router();
const Game = require('../model/game');


gameRouter.get('/', (req, res) => {
    Game.find({}, (err, response) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to get games",
                    msgError: true
                }
            });
        else {
            res.status(200).json({ response });
        }

    });
});

gameRouter.post('/', (req, res) => {
    const game = new Game(req.body);
    game.save((err, document) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to add Game",
                    msgError: true
                }
            });
        else
            res.status(200).json({
                message: {
                    msgBody: "Successfully Added Game",
                    msgError: false
                }
            });
    });
});
gameRouter.delete('/:id', (req, res) => {
    Game.findByIdAndDelete(req.params.id, err => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to Delete Game",
                    msgError: true
                }
            });
        else
            res.status(200).json({
                message: {
                    msgBody: "Successfully Deleted Game",
                    msgError: false
                }
            });
    });
});


gameRouter.put('/:id', (req, res) => {
    Game.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true }, (err, response) => {
        if (err)
            res.status(500).json({
                message: {
                    msgBody: "Unable to Update game",
                    msgError: true
                }
            });
        else
            res.status(200).json({
                message: {
                    msgBody: "Successfully Updated game",
                    msgError: false
                }
            });
    });
});

module.exports = gameRouter;