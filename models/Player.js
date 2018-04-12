const playerSchema = require("../db/schema");
const mongoose = require('mongoose');

const player = mongoose.model("Player", playerSchema);
module.exports = player;