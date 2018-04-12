const gmSchema = require("../db/schema");
const mongoose = require('mongoose');

const gm = mongoose.model("GM", gmSchema);
module.exports = gm;