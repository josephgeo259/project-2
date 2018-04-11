var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var CommentsSchema = new Schema({
    Description: String,
    
});

var PlayerSchema = new Schema({
    name: String,
    team: String,
    statistics: String,
});

var GmSchema = new Schema({
    name: String,
    years_experience: String,
    league_type: String,
    players: [PlayerSchema]
});




var GmModel = mongoose.model("GM", GmSchema);
var PlayerModel = mongoose.model("Player", PlayerSchema);

module.exports = {
    Gm: GmModel,
    Player: PlayerModel
};