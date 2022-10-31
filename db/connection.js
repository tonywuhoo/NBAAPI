import mongoose, { mongo } from "mongoose";
import chalk from "chalk";
//A tool to help view server data

mongoose.set("returnOriginal", false)

const url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/NBAAPI"
  
mongoose
  .connect(url)
  .catch((error) => {
    console.error("There's an error ", error)
  })

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB"))
})

mongoose.connection.on("error", (error) => {
  console.log(chalk.red("Connection error", error))
})

export default mongoose.connection