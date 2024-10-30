import express from "express"

class GamesRouter{
    constructor(){
        this.router = express.Router()
    }

    start(){
        return this.router
    }
}


export default GamesRouter