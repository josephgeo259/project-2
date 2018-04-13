const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    description: String,

});

const playerSchema = new Schema({
    name: String,
    team: String,
    comments: [commentSchema]
});

const gmSchema = new Schema({
    name: String,
    years_experience: Number,
    league_type: String,
    players: [playerSchema]
});



module.exports = {
     gmSchema,
     playerSchema,
     commentSchema,
};