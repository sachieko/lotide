const eqObjects = require('../eqObjects');
const expect = require('chai').expect;
// TEST CODE BELOW HERE --- Do not modify it's huge!

const testObj1 = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: ["Hotpot", "Ramen", "Sushi", "Wonton soup", "Pho", "Chips"],
  Person: "Tyler"
};

const testObj2 = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: ["Hotpot", "Ramen", "Sushi", "Wonton soup", "Pho", "Chips"],
  Person: "Tyler"
};

const testObj3 = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: ["Hotpot", "Ramen", "Sushi", "Wonton soup", "Pho", "Chips"],
  Person: "Neil"
};

const testObj4 = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: {
    Soup: ["Ramen", "Pho", "Hotpot", "Wonton soup"],
    RiceDish: ["Sushi"]
  }
};

const testObj5 = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: {
    Soup: ["Ramen", "Pho", "Hotpot", "Wonton soup"],
    RiceDish: ["Sushi"]
  }
};

const testObj6 = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: {
    Soup: ["Ramen", "Pho", "Wonton soup"],
    RiceDish: ["Sushi"]
  }
};

describe('#eqObjects function tests', () => {
  it("returns true for two equal objects with only string or array values", () => {
    expect(eqObjects(testObj1, testObj2)).to.be.true;
  });
  it("returns true for two equal objects with nested objects as values", () => {
    expect(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).to.be.true;
  });
  it("returns true for two equal objects with only string or array values", () => {
    expect(eqObjects(testObj1, testObj2)).to.be.true;
  });
  it("returns false for two unequal objects with nested objects as values", () => {
    expect(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).to.be.false;
  });
  it("returns true for two unequal objects with nexted object values", () => {
    expect(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })).to.be.false;
  });
  it("returns false for two unequal objects with different string value", () => {
    expect(eqObjects(testObj1, testObj3)).to.be.false;
  });
  it("returns true for two equal objects with nested objects and arrays", () => {
    expect(eqObjects(testObj4, testObj5)).to.be.true;
  });
  it("returns false for two objects whose difference is a missing element in an array value", () => {
    expect(eqObjects(testObj5, testObj6)).to.be.false;
  });
});
