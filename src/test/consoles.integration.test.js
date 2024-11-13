import { expect } from "chai";
import supertest from "supertest";
import DataSet from "../utils/dataSetTest.js";

const urlbase =  supertest("http://localhost:8080")//consoles

// TEST DE INTEGRACION

describe('Test de consolas: ', () => {

    it('GET Console', async() => {
        const response = await urlbase.get("/consoles")
        expect(response.status).to.equal(200)
    })

    it('POST Console con precio', async() => {
        const response = await urlbase.post("/console").send(DataSet.getDatoPruebaPostConsolaConPrecio())
        expect(response.status).to.equal(201)
    })

    
    it('POST Console sin precio', async() => {
        const response = await urlbase.post("/console").send(DataSet.getDatoPruebaConsolaSinPrecio())
        expect(response.status).to.equal(400)
    })
})