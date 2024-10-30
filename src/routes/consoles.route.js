import express from "express"

class ConsoleRouter{
    constructor(){
        this.router = express.Router()
    }

    start(){
        return this.router
    }
}


export default ConsoleRouter