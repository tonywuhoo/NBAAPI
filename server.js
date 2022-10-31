import express from "express"
import cors from "cors"
import logger from "morgan"
import chalk from "chalk"
import db from "./db/connection.js"
import routes from "./routes/index.js"

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", routes);

db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB!"));
  app.listen(PORT, () => {
    console.log(
      `Express server running in development on http://localhost:${PORT}`
    );
  });
});
