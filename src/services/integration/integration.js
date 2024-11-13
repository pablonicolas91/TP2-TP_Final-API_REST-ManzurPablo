import ApiDolar from "./apiDolar.js";

class Integration {
    static async showPriceInArs (data) {
        const dolarTarjeta = await ApiDolar.getDolarTarjeta()
        const dolarOficial = await ApiDolar.getDolarOficial()
        // console.log(`Dolar Oficial: ${dolarOficial}\nDolar Tarjeta: ${dolarTarjeta}`)

        data.map( el => {
            el['precioARSDolarTarjeta'] = parseFloat((el.precioUSD * dolarTarjeta).toFixed(2))
            //ToFixed la use para redondear a 2 decimales, pero como devuelve string, parseo a float 
            el['precioARSDolarOficial'] = parseFloat((el.precioUSD * dolarOficial).toFixed(2))
        })

        return data
    }
}

export default Integration