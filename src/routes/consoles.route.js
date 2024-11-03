import express from "express"
import ConsolesControllers from "../controllers/consoles.controllers.js"

class ConsoleRouter{
    constructor(){
        this.router = express.Router()
        this.controller = new ConsolesControllers()
        
    }

    start(){
        this.router.get("/consoles", this.controller.getConsoles)
        this.router.post("/console", this.controller.postConsole)
        this.router.patch("/console/update/:id", this.controller.patchConsole)
        this.router.put("/console/update/all/:id", this.controller.putConsole)
        this.router.delete("/console/:id", this.controller.deleteConsole)
        return this.router
    }
}


export default ConsoleRouter
