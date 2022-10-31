import Team from "../models/nbateams.js"

export async function getTeams(request, response) {
  try {
    const teams = await Team.find()
    response.json(teams)
  } catch (error) {
    console.error(error)
    response.status(500).json({ error: error.message });
  }
}

export async function getTeam(request, response) {
  try {
    let id = request.params
    console.log(id.id)
    const team = await Team.find({ abbreviation: id.id });

    if (team) {
      return response.json(team);
    }

    response.status(404).json({ message: "Team not found!" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
}

export async function createTeam(request, response) {
  try {
    const team = new Team(request.body);
    await team.save();
    response.status(201).json(team);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
}

export async function updateTeam(request, response) {
  try {
    const { id } = request.params;
    const team = await Team.update({ last_name: id.id }, request.body);
    response.status(201).json(team);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
}

export async function deleteTeam(request, respond) {
  try {
    const { id } = request.params;
    const deleted = await Team.findByIdAndDelete(id);

    if (deleted) {
      return response.status(200).send("Team deleted!");
    }

    throw new Error("Team not found");
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
}