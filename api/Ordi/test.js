"use strice"

const frisby = require('frisby')

const URL = "http://localhost:3983"

describe('Ordi routes tester', () => {

    it("/POST Create new Ordi", () => {
        return frisby
            .post(`${URL}/Ordi`)
            .expectNot("status", 500);
    });

    it("/GET get all Ordi", () => {
        return frisby
            .get(`${URL}/Ordi`)
            .expectNot("status", 500)
    });

    it("/GET/id Show specify Ordi", () => {
        return frisby
            .get(`${URL}/Ordi/1`)
            .expectNot("status", 500)
    });

    it("/PUT/id Modify specify Ordi", () => {
        return frisby
            .put(`${URL}/Ordi/1`)
            .expectNot("status", 500)
    });

    it("/DELETE/id Delete specify Ordi", () => {
        return frisby
            .del(`${URL}/Ordi/1`)
            .expectNot("status", 500)
    });

});