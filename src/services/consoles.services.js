import Factory from "../models/Factory.js"
import config from "../config.js"
import { validateConsolePrice } from "./validate/schema.js"
import Integration from "./integration/integration.js"

class ConsoleServices {
    constructor(){
        this.model = Factory.get(config.MONGOPERSISTENCE).consoles
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
        const consoles = await this.model.getConsoles()
        const consolesWithArsPrice = Integration.showPriceInArs(consoles)
        return consolesWithArsPrice
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