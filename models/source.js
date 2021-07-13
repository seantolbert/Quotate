const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sourceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Source", sourceSchema);
