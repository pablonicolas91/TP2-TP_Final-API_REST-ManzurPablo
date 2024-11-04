import MongoConnection from "../MongoConnection.js"

class GamesMongoModel {
    constructor(){
       
    }

    async getGames() {
        const games = await MongoConnection.db
        .collection("games").find({}).toArray()
        return games
    }

    async postGame (data) {
        const newGame = await MongoConnection.db.collection("games").insertOne(data)
        return newGame
    }

    async patchGame(id, data) {
     
    }

    async putGame (id, data) {
       
    }

    async deleteGame (id) {
       
    }
}

export default GamesMongoModel