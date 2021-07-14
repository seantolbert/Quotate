const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sourceSchema = new Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Source", sourceSchema);
