import ConsolesMemModel from "./DAO/ConsolesMemMemory.js";
import ConsolesMongoModel from "./DAO/ConsolesMongoMem.js";
import GamesMemModel from "./DAO/GamesMemMemory.models.js";
import GamesMongoModel from "./DAO/GamesMongoMem.js";
import config from "../config.js";

class Factory {
    static get(persistence) {
        switch (persistence) {
            case (config.LOCALPERSISTENCE):
                console.log("Persistencia por servidor...")
                return {
                    games: new GamesMemModel(),
                    consoles : new ConsolesMemModel()
                    }    
                break;

            case (config.MONGOPERSISTENCE):
                console.log("Persistencia en Mongo....")
                return {
                    games: new GamesMongoModel(),
                    consoles: new ConsolesMongoModel()
                }
                break

            default:
                return {
                    games: new GamesMongoModel(),
                    consoles: new ConsolesMongoModel()
                }
                break;
        }
    }
}

export default Factory