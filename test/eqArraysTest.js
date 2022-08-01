const expect = require('chai').expect;
const eqArrays = require('../eqArrays');


describe('#eqArrays function tests', () => {
  describe('non-nested tests', () => {
    it("returns true for arrays with the same non-nested elements as numbers", () => {
      expect(eqArrays([1, 2, 3], [1, 2, 3])).to.be.true;
    });
    it("returns false for arrays with same elements out of order", () => {
      expect(eqArrays([1, 2, 3], [3, 2, 1])).to.be.false;
    });
    it("returns true for arrays with same elements as strings", () => {
      expect(eqArrays(["1", "2", "3"], ["1", "2", "3"])).to.be.true;
    });
    it("returns false for same elements but different types", () => {
      expect(eqArrays(["1", "2", "3"], ["1", "2", 3])).to.be.false;
    });
  });
  describe('nested tests', () => {
    it("returns true for two arrays with nested values that are the same", () => {
      expect(eqArrays([[2, 3], [4]], [[2, 3], [4]])).to.be.true;
    });
    it("returns false for two arrays with nested values that have one difference", () => {
      expect(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])).to.be.false;
    });
    it("returns false for arrays where one element is nested but other is not", () => {
      expect(eqArrays([[2, 3], [4]], [[2, 3], 4])).to.be.false;
    });
    it("returns true for a recursively empty array", () => {
      expect(eqArrays([[[[]]]], [[[[]]]])).to.be.true;
    });
  });
});