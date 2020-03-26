const { succeed, fail, repair, get } = require('./enhancer.js');

function createItem(durability = 50, enhancement = 5, name = "phoenix sword") {
  const item = {
    name: name,
    durability: durability,
    enhancement: enhancement
  }
  return item
}

it("should run the tests", () => {
  expect(true).toBe(true)
})

describe("enhancer.js", function () {
  describe("succeed()", function () {

    it("enhancement value should be increased by 1", function () {
      expect(succeed(createItem(50, 1)).enhancement).toBe(2)
      // expect(succeed(createItem(50, 0)).enhancement).toBe(1)
    })

    it("enhancement value should be a number", function () {
      expect(() => { succeed(createItem(50, {})) }).toThrowError("NaN")
      expect(() => { succeed(createItem(50, [])) }).toThrowError("NaN")
      expect(() => { succeed(createItem(50, "Hey")) }).toThrowError("NaN")
      // expect(() => { succeed(createItem(50, false)) }).toThrowError("NaN")
      // expect(() => { succeed(createItem(50, NaN)) }).toThrowError("NaN")
    })

    it("enhancement key should be present", function () {
      expect(() => { succeed({ durability: 50, name: "broken" }) }).toThrow()
    })

    it("enhancement value should be between 0 and 20", function () {
      expect(() => { succeed(createItem(50, -123125)) }).toThrowError("level")
      expect(() => { succeed(createItem(50, -1)) }).toThrowError("level")
      expect(() => { succeed(createItem(50, 21)) }).toThrowError("level")
      expect(() => { succeed(createItem(50, 21352356235)) }).toThrowError("level")
    })

    // it.todo("enhancement value should not increase 20")
    // expect(() => { succeed(createItem(50, 20)) }).toThrowError("level")
    it.todo("")
    it.todo("")
    it.todo("")
    it.todo("")
    it.todo("")
    it.todo("")
    it.todo("")
    it.todo("")
    it.todo("")
    it.todo("")
    it.todo("")
    it.todo("")
    it.todo("")
    it.todo("")


  })


  describe("fail()", function () {

  })

  describe("repair()", function () {
    let item = {
      name: "phoenix sword",
      durability: 10,
      enhancement: 1
    }
    expect(repair(item).durability).toBe(100)
  })

  describe("get()", function () {

  })

})
