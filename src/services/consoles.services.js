import Factory from "../models/Factory.js"
//MONGOConsoles

class ConsoleServices {
    constructor(){
        this.model = Factory.get("MONGOConsoles")
    }

    postConsole = async(data) => {
        return await this.model.postConsole(data)
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