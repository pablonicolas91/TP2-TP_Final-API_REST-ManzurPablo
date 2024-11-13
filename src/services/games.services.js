import Factory from "../models/Factory.js"
import config from "../config.js"
import { validateGamePrice} from "./validate/schema.js"
import Integration from "./integration/integration.js"

class GamesServices {
    constructor(){
        this.model = Factory.get(config.MONGOPERSISTENCE).games
    }

    postGame = async(data) => {
        if (!validateGamePrice(data)){
            const newGame = await this.model.postGame(data)
            return newGame
        
        } else {
            throw new Error("No se puede ingresar juegos con precio menor o igual a 0")
        }
    }

    getGames = async() => {
        const games = await this.model.getGames()
        const gamesWithArsPrice = Integration.showPriceInArs(games)
        return gamesWithArsPrice
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