const {catto} = require("./catto.js");
const {expect} = require("chai");

describe("catto test", () => {
    it("should exclude num", () => {
        expect(catto(6)).to.equal(i!=6);
    })
    it("should fail", () => {
        expect(catto(6)).to.equal(6);
    })
});