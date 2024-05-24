const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  cid: {
    type: String,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("Images", imageSchema);
