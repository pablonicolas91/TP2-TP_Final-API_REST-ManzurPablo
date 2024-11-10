import Integration from "../../services/integration/integration.js"
import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"


class GamesMongoModel {
    constructor(){
       
    }

    async getGames() {
        const games = await MongoConnection.db
        .collection("games").find({}).toArray()
        
        console.log(games)

        const gamesWithArsPrice = Integration.showPriceInArs(games)
        return gamesWithArsPrice
        // return games
    }

    async postGame (data) {
        const newGame = await MongoConnection.db.collection("games").insertOne(data)
        return newGame
    }

    async patchGame(id, data) {
     const game = await MongoConnection.db.collection("games").updateOne(
            {_id: ObjectId.createFromHexString(id)},
            {$set: data}
        )
     return game
    }

    async putGame (id, data) {
       const game = await MongoConnection.db.collection("games").replaceOne(
            {_id: ObjectId.createFromHexString(id)},
        data
        )
     return game
    }

    async deleteGame (id) {
        const game = await MongoConnection.db.collection("games").deleteOne(
            {_id: ObjectId.createFromHexString(id)}
        )
        return game
    }
}

export default GamesMongoModel