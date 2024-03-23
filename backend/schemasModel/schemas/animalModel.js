import mongoose from "mongoose";

const animalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  kinds: {
    type: String,
    enum: [
      "domesticated",
      "wild",
      "carnivore",
      "herbivores",
      "aquatic",
      "aerial",
    ],
  },

  juicy: {
    default: true,
  },
  fierce: {
    default: false,
  },
});

export default animalSchema;
