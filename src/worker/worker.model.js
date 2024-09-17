const { mongoose, model } = require("mongoose");

const workerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    rate: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const workerModel = model("Worker", workerSchema);
module.exports = {
  workerModel,
};
