const factorial = require("../maths.js")
const {expect} = require("chai");

describe("factorial test", () => {
    it("should reverse factorialize", () => {
        expect(factorial(120)).to.equal(5);
    })
    it("should fail", () => {
        expect(factorial(120)).to.equal("NONE");
    })
});
