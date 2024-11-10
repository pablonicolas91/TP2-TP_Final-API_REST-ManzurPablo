import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"
import Integration from "../../services/integration/integration.js"

class ConsolesMongoModel {
    constructor(){
       
    }

    async getConsoles() {
        const consoles = await MongoConnection.db
        .collection("consoles").find({}).toArray()

        console.log(consoles)

        const consolesWithArsPrice = Integration.showPriceInArs(consoles)
        return consolesWithArsPrice

        return consoles
    }

    async postConsole (data) {
      const newConsole = await MongoConnection.db.collection("consoles").insertOne(data)
      return newConsole
    }

    async patchConsole(id, data) {
      const console = await MongoConnection.db.collection("consoles").updateOne(
        {_id: ObjectId.createFromHexString(id)},
        {$set: data}
      )
      return console
    }

    async putConsole (id, data) {
      const console = await MongoConnection.db.collection("consoles").replaceOne(
        {_id: ObjectId.createFromHexString(id)},
        data
      )
      return console
    }

    async deleteConsole (id) {
      const console = await MongoConnection.db.collection("consoles").deleteOne(
        {_id: ObjectId.createFromHexString(id)}
      )
      return console
    }
}

export default ConsolesMongoModel