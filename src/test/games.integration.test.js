import { expect } from "chai";
import supertest from "supertest";
import DataSet from "../utils/dataSetTest.js";

const urlbase =  supertest("http://localhost:8080")

// npm run testB
describe ("Test de Games", () => {

    it('GET Games', async() => {
        const response = await urlbase.get("/games")
        expect(response.status).to.equal(200)
    })

})