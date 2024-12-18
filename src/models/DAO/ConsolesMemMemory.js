class ConsolesMemModel {
    constructor(){
        this.consoles = [
            { id: 1, marca: "Sony", modelo: "PlayStation 5", precioUSD: 1080},
            { id: 2, marca: "Microsoft", modelo: "Xbox", precioUSD: 800},
            { id: 3, marca: "Nintendo", modelo: "Switch", precioUSD: 750}
        ]
    }

    async getConsoles() {
        return this.consoles
    }

    async postConsole (data) {
        const lastElement = this.consoles[this.consoles.length - 1]
        data.id = lastElement.id + 1
        this.consoles.push(data)
        return data
    }

    async patchConsole(id, data) {
        const index = this.consoles.findIndex(el => el.id == id)

        try{
            if (index == -1){
                throw new Error ('Consola no encontrada en base de datos')
            }
            
            const update = {...this.consoles[index], ...data}
            this.consoles.splice(index, 1, update)
            return update

        } catch (error){
            return {status: 404, message: error.message}
        }
    }

    async putConsole (id, data) {
        try {
            const index = this.consoles.findIndex((e) => e.id == id)
            if(index == -1) throw new Error("El índice no existe.")

            const updateConsole = {...this.consoles[index], ...data}
            this.consoles.splice(index, 1, updateConsole)
            return updateConsole

        } catch (error) {
            return {errorType: error.message, 
                    errorInformation: "La actualización total de la consola no se pudo completar."
                }
        }
    }

    async deleteConsole (id) {
        const index = this.consoles.findIndex((e) => e.id == id)
        try {
            if(index == -1){
                throw new Error("El índice no existe.")
            } else{
                this.consoles.splice(index, 1)
                return {success: `La consola con id ${id} se eliminó correctamente.`}
            }
        
        } catch(error) {
            return {error: error.message}
        }

        
    }
}

export default ConsolesMemModel