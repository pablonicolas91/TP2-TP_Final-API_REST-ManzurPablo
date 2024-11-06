class GamesMemModel {
    constructor(){
        this.games = [
            { id: 1, nombre: "FC 25", genero: "Deportes", plataforma:"PlayStation 5", precioUSD: 20},
            { id: 2, nombre: "Need for Speed", genero: "Carreras", plataforma:"PlayStation 4", precioUSD: 35},
            { id: 3, nombre: "Resident Evil: Revelations 2", genero: "Horror", plataforma:"PlayStation 4", precioUSD: 33}
        ]
    }

    async getGames() {
        return this.games
    }

    async postGame (data) {
        const lastElement = this.games[this.games.length - 1]
        data.id = lastElement.id + 1
        this.games.push(data)
        return data
    }

    async patchGame(id, data) {
        const index = this.games.findIndex(el => el.id == id)

        try{
            if (index == -1){
                throw new Error ('Juego no existente en base de datos')
            }
            
            const update = {...this.games[index], ...data}
            this.games.splice(index, 1, update)
            return update

        } catch (error){
            return {status: 404, message: error.message}
        }
    }

    async putGame (id, data) {
        try {
            const index = this.games.findIndex((e) => e.id == id)
            if(index == -1) throw new Error("El índice no existe.")
            const updateGame = {...this.games[index], ...data}
            this.games.splice(index, 1, updateGame)
            return updateGame
        } catch (error) {
            return "La actualización total del juego no se pudo completar."
        }
    }

    async deleteGame (id) {
        const index = this.games.findIndex((e) => e.id == id)
        if(index == -1){
            throw new Error("El índice no existe.")
        } else{
            this.games.splice(index, 1)
            return `El juego ${this.games[id].nombre} se eliminó correctamente.`
        }
    }
}

export default GamesMemModel