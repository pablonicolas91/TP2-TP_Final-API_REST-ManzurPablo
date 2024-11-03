import GamesServices from "../services/games.services.js";

class GamesController{

    constructor(){
        this.service = new GamesServices()
    }

    postGame = async(req, res) => {
        const data = req.body

        try {
            if (JSON.stringify(req.body) == "{}"){
                throw new Error("No se pueden insertar datos vacíos")
            }

            const newGame = await this.service.postGame(data)
            res.send(newGame)
        
        } catch(error){
            res.send({error: error.message})
        }
    }

    getGames = async(req, res) => {
        const games = await this.service.getGames()
        res.send(games)
    }


    deleteGame = async(req, res) => {
        const { id } = req.params
        const deletedGame = await this.service.deleteGame(id)
        
        if (typeof deletedGame != "string") {
            res.status(200).send(deletedGame)
        
        } else {
            res.status(404).send(deletedGame)
        }
    }

    putGame = async(req, res) => {
        const { id } = req.params
        const data = req.body
        const updatedGame = await this.service.putGame(id, data)
        res.send(updatedGame)
    }
    
    patchGame= async(req, res) => {
        const { id } = req.params
        const data = req.body
        const gamePartialUpdate = await this.service.patchGame(id, data)
        res.status(200).send(gamePartialUpdate)
    }

}

export default GamesController