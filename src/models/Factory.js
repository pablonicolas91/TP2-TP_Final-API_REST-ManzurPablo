import ConsolesMemModel from "./DAO/ConsolesMemMemory.js";
import GamesMemModel from "./DAO/GamesMemMemory.models.js";

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

            default:
                break;
        }
    }
}

export default Factory