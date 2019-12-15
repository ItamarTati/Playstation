const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    release: {
        type: String,
        required: true
    },
    players: {
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    art: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Game', GameSchema);


