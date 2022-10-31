import mongoose from "mongoose";

let Team = new mongoose.Schema({
  id: { type: Number },
  abbreviation: { type: String },
  city: { type: String},
  conference: { type: String },
  division: { type: String },
  full_name: { type: String},
  name: { type: String }
})

export default mongoose.model("Teams" , Team)