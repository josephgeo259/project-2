const gmSchema = require("../db/schema");
const mongoose = require('mongoose');

const Gm = mongoose.model("GM", gmSchema);
module.exports = Gm