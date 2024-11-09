import Factory from "../models/Factory.js"
import config from "../config.js"
import { validateConsolePrice } from "./validate/schema.js"

class ConsoleServices {
    constructor(){
        this.model = Factory.get(config.PERSISTENCECONSOLES)
    }

    postConsole = async(data) => {
        if (!validateConsolePrice(data)) {
            const newConsole = await this.model.postConsole(data)
            return newConsole
        } else{
            throw new Error("No se puede ingresar consolas con precio menor o igual a 0")
        }
    }

    getConsoles = async() => {
        return await this.model.getConsoles()
    }

    putConsole = async (id, data) => {
        return await this.model.putConsole(id, data)
    }

    patchConsole = async (id, data) => {
        return await this.model.patchConsole(id, data)
    }

    deleteConsole = async (id) => {
       return await this.model.deleteConsole(id)
    }
}

export default ConsoleServices