
class ApiDolar {
    static async getDolarOficial(){
        try {
            const response = await fetch('https://dolarapi.com/v1/dolares/oficial')
            const datos = await response.json()
            const { venta: valorDolarOficial } = datos
            return valorDolarOficial
        
        } catch (error){
            console.error("Error al cargar los datos: ", error)
        }
    }

    static async getDolarTarjeta(){
        try {
            const response = await fetch('https://dolarapi.com/v1/dolares/tarjeta')
            const datos = await response.json()
            const { venta: valorDolarTarjeta } = datos
            return valorDolarTarjeta
            
        } catch (error){
            console.error("Error al cargar los datos: ", error)
        }
    }
}

export default ApiDolar