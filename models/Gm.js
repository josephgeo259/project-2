const schema = require("../db/schema");
const mongoose = require('mongoose');

const Gm = mongoose.model("GM", schema.gmSchema);
module.exports = Gm