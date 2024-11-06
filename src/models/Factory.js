import ConsolesMemModel from "./DAO/ConsolesMemMemory.js";
import ConsolesMongoModel from "./DAO/ConsolesMongoMem.js";
import GamesMemModel from "./DAO/GamesMemMemory.models.js";
import GamesMongoModel from "./DAO/GamesMongoMem.js";
import config from "../config.js";

class Factory {
    static get(persistence) {
        switch (persistence) {
            case "MEMConsoles":
                console.log("Persistencia por servidor...entidad Consoles")
                return new ConsolesMemModel()
                break;
            
            case "MEMGames":
                console.log("Persistencia por servidor..entidad Games")
                return new GamesMemModel()
                break;

            case (config.PERSISTENCEGAMES):
                console.log("Persistencia en Mongo entidad Games")
                return new GamesMongoModel()

            case (config.PERSISTENCECONSOLES):
                console.log("Persistencia en Mongo entidad Consoles ")
                return new ConsolesMongoModel()
                break

            default:
                break;
        }
    }
}

export default Factory