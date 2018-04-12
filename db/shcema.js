const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

const commentSchema = new Schema({
    description: String,

});

const playerSchema = new Schema({
    name: String,
    team: String,
    statistics: String,
    comments: [commentSchema]
});

const gmSchema = new Schema({
    name: String,
    years_experience: String,
    league_type: String,
    players: [playerSchema]
});



module.exports = {
     GmModel,
     PlayerModel,
};