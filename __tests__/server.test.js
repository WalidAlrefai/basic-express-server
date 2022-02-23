"use strict";
const server = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(server.app);

describe("server", () => {
    it("should get status 404 for bad method ", async () => {
        const response = await request.post("/person");
        expect(response.status).toBe(404);
    });
    it("should get status 404", async () => {
        const response = await request.get("/any");
        expect(response.status).toBe(404);
    });
});