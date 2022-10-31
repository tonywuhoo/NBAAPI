import { Router } from "express"
import * as controllers from "../controllers/nbaplayers.js"

const router = Router()

router.get("/", controllers.getPlayers)
router.get("/:id", controllers.getPlayer)
router.post("/", controllers.createPlayer)
router.put("/:id", controllers.updatePlayer)
router.delete("/:id", controllers.deletePlayer)

export default router
