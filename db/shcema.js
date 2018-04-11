const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

const CommentSchema = new Schema({
    description: String,

});

const PlayerSchema = new Schema({
    name: String,
    team: String,
    statistics: String,
    comments: [CommentSchema]
});

const GmSchema = new Schema({
    name: String,
    years_experience: String,
    league_type: String,
    players: [PlayerSchema]
});


const GmModel = mongoose.model("GM", GmSchema);
const PlayerModel = mongoose.model("Player", PlayerSchema);

module.exports = {
    Gm: GmModel,
    Player: PlayerModel
};