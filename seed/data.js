import db from "../db/connection.js"
import Player from "../models/nbaplayers.js"
import Team from "../models/nbateams.js"
import players from "./nbaplayers.json" assert { type: "json" }
import teams from "./nbateams.json" assert { type: "json" }
import fetch from 'node-fetch';
import { promises as fsPromises } from 'fs';

function doShit() {
fetch('https://www.balldontlie.io/api/v1/players')
  .then(response => response.json())
  .then(data => {
    return data.data
  })
  .then(data => fsPromises.writeFile("./seed/nbaplayers.json", JSON.stringify((data))))
  .catch(error => console.error(error))

  fetch('https://www.balldontlie.io/api/v1/teams')
  .then(response => response.json())
  .then(data => {
    return data.data
  })
  .then(data => fsPromises.writeFile("./seed/nbateams.json", JSON.stringify((data))))
  .catch(error => console.error(error))

async function insertData() {

  await Player.create(players)
  await Team.create(teams)

  await db.close()
} 

  insertData()

    
}

export default doShit