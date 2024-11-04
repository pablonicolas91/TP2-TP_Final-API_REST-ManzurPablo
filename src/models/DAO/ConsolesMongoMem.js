import MongoConnection from "../MongoConnection.js"


class ConsolesMongoModel {
    constructor(){
       
    }

    async getConsoles() {
        const consoles = await MongoConnection.db
        .collection("consoles").find({}).toArray()
        return consoles
    }

    async postConsole (data) {
      const newConsole = await MongoConnection.db.collection("consoles").insertOne(data)
      return newConsole
    }

    async patchConsole(id, data) {
     
    }

    async putConsole (id, data) {
       
    }

    async deleteConsole (id) {
       
    }
}

export default ConsolesMongoModel