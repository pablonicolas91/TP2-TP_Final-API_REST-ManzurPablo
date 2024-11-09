import Joi from "joi";

export const validateConsolePrice = (data) => {
    const schema = Joi.object({
        marca: Joi.string(),
        modelo: Joi.string(),
        precioUSD : Joi.number().min(1)
    })

    const { error } = schema.validate(data)
    const result = error ? true : false
    return result
}


export const validateGamePrice = (data) => {
    const gameSchema = Joi.object({
        nombre: Joi.string(),
        genero: Joi.string(),
        plataforma: Joi.string(),
        precioUSD: Joi.number().greater(0)
    })

    const { error } = gameSchema.validate(data)
    const result = error ? true : false
    return result
}