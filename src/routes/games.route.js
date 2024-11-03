import express from "express"
import GamesController from "../controllers/games.controllers.js"

class GamesRouter{
    constructor(){
        this.router = express.Router()
        this.controller = new GamesController()
    }

    start(){
        this.router.get("/games", this.controller.getGames)
        this.router.post("/game", this.controller.postGame)
        this.router.patch("/game/update/:id", this.controller.patchGame)
        this.router.put("/game/update/all/:id", this.controller.putGame)
        this.router.delete("/game/:id", this.controller.deleteGame)
        return this.router
    }
}


export default GamesRouter