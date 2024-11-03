import ConsoleServices from "../services/consoles.services.js";

class ConsolesController {
    constructor(){
        this.service = new ConsoleServices()
    }

    postConsole = async(req, res) => {
        const data = req.body

        try {
            if (JSON.stringify(req.body) == "{}"){
                throw new Error("No se pueden insertar datos vacíos")
            }

            const newConsole = await this.service.postConsole(data)
            res.send(newConsole)
        
        } catch(error){
            res.send({error: error.message})
        }
    }

    getConsoles = async(req, res) => {
        const consoles = await this.service.getConsoles()
        res.send(consoles)
    }


    deleteConsole = async(req, res) => {
        const { id } = req.params
        const deletedConsole = await this.service.deleteConsole(id)
        
        if (typeof deletedConsole != "string") {
            res.status(200).send(deletedConsole)
        
        } else {
            res.status(404).send(deletedConsole)
        }
    }

    putConsole = async(req, res) => {
        const { id } = req.params
        const data = req.body
        const updatedConsole = await this.service.putConsole(id, data)
        res.send(updatedConsole)
    }
    
    patchConsole= async(req, res) => {
        const { id } = req.params
        const data = req.body
        const consolePartialUpdate = await this.service.patchConsole(id, data)
        res.status(200).send(consolePartialUpdate)
    }

}


export default ConsolesController