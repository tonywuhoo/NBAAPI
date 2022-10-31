import { response } from "express"
import Player from "../models/nbaplayers.js"

export async function getPlayers(request, response) {
  try {
    const players = await Player.find()
    response.json(players)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message });
  }
}

export async function getPlayer(request, response) {
  try {
    let id = request.params
    console.log(id.id)
    const player = await Player.find({ last_name: id.id });

    if (player) {
      return response.json(player);
    }

    response.status(404).json({ message: "Player not found!" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
}

export async function createPlayer(request, response) {
  try {
    const player = new Player(request.body);
    await player.save();
    response.status(201).json(player);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
}

export async function updatePlayer(request, response) {
  try {
    const { id } = request.params;
    const player = await Player.update({ last_name: id.id }, request.body);
    response.status(201).json(player);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
}

export async function deletePlayer(request, respond) {
  try {
    const { id } = request.params;
    const deleted = await Player.findByIdAndDelete(id);

    if (deleted) {
      return response.status(200).send("Player deleted!");
    }

    throw new Error("Player not found");
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
}