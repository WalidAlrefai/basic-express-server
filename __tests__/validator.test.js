"use strict";
const server = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(server.app);

describe("server", () => {
    it('test /person', async () => {
        const response = await request.get('/person');
        expect(typeof response.body).toEqual('object')
    })
    it("should  get status 500", async () => {
        const response = await request.get("/person?name=");
        expect(response.status).toBe(500);
    });
    it("should  get status 200", async () => {
        const response = await request.get("/person?name=walid");
        expect(response.status).toBe(200);
        expect(response.text).toBe('{"name":"walid"}');
    });
});
