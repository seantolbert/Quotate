const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    source: {
      type: Schema.Types.ObjectId,
      ref: "source",
      default: 'anonymous'
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quote", quoteSchema);
