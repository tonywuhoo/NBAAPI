import { Router } from "express"
import playerRoutes from "./nbaplayers.js"
import teamRoutes from "./nbateams.js"

const router = Router()

router.get("/", (request, response) => {
  response.json({
    "Players" : "http://localhost:3000/players",
    "Teams": "http://localhost:3000/teams",
    "Instructions": "Search players by last name, search teams by abbreviations. Enjoy"
  })
})

router.use("/players", playerRoutes)
router.use("/teams", teamRoutes)

export default router