const playerSchema = require("../db/schema");
const mongoose = require('mongoose');

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;