const commentSchema = require("../db/schema");
const mongoose = require('mongoose');

const comment = mongoose.model("Comment", commentSchema);
module.exports = comment;