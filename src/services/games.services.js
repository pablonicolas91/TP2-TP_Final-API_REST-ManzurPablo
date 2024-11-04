import Factory from "../models/Factory.js"
//MONGOGames  / 

class GamesServices {
    constructor(){
        this.model = Factory.get("MONGOGames")
    }

    postGame = async(data) => {
        return await this.model.postGame(data)
    }

    getGames = async() => {
        return await this.model.getGames()
    }

    putGame = async (id, data) => {
        return await this.model.putGame(id, data)
    }

    patchGame = async (id, data) => {
        return await this.model.patchGame(id, data)
    }

    deleteGame = async (id) => {
       return await this.model.deleteGame(id)
    }
}

export default GamesServices