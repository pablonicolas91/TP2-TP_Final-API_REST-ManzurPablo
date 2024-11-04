import { MongoClient } from "mongodb";
import config from "../config.js"

class MongoConnection {
    
    static client = null
    static db = null

    static connect = async () => {
        this.client = new MongoClient(config.STRC)
        await this.client.connect()
        this.db = this.client.db(config.NAMEBASE)
    }

}

export default MongoConnection