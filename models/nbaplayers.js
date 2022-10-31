import mongoose, { mongo } from "mongoose";

let Player = new mongoose.Schema({
  id: { type: Number },
  first_name: { type: String },
  height_feet: { type: Number },
  height_inches: { type: Number },
  last_name: { type: String },
  position: { type: String },
  team: {
    id: { type: Number },
    abbreviation: { type: String },
    city: { type: String },
    conference: { type: String },
    division: { type: String },
    full_name: { type: String },
    name: { type: String }
  },
  weight_pounds: { type: Number }
})

export default mongoose.model("Players", Player)