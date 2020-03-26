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


    it("enhancement value should be increased by 1", function () {
      expect(succeed(createItem(50, 1)).enhancement).toBe(2)
      expect(succeed(createItem(50, 0)).enhancement).toBe(1)
      expect(succeed(createItem(50, 15)).enhancement).toBe(16)
      expect(succeed(createItem(50, 19)).enhancement).toBe(20)
    })

    it("enhancement value should not be increased if already at 20", function () {
      expect(() => { succeed(createItem(50, 20)) }).toThrowError("20")
    })

  })


  describe("fail()", function () {

    it("enhancement value should be a number", function () {
      expect(() => { fail(createItem(50, {})) }).toThrowError("NaN")
      expect(() => { fail(createItem(50, [])) }).toThrowError("NaN")
      expect(() => { fail(createItem(50, "Hey")) }).toThrowError("NaN")
      // expect(() => { fail(createItem(50, false)) }).toThrowError("NaN")
      // expect(() => { fail(createItem(50, NaN)) }).toThrowError("NaN")
    })

    it("enhancement key should be present", function () {
      expect(() => { fail({ durability: 50, name: "broken" }) }).toThrow()
    })

    it("enhancement value should be between 0 and 20", function () {
      expect(() => { fail(createItem(50, -123125)) }).toThrowError("level")
      expect(() => { fail(createItem(50, -1)) }).toThrowError("level")
      expect(() => { fail(createItem(50, 21)) }).toThrowError("level")
      expect(() => { fail(createItem(50, 21352356235)) }).toThrowError("level")
    })


    it("enhancement value should not change with an enhancement level 0-16", function () {
      expect(fail(createItem(50, 1)).enhancement).toBe(1)
      expect(fail(createItem(50, 0)).enhancement).toBe(0)
      expect(fail(createItem(50, 15)).enhancement).toBe(15)
      expect(fail(createItem(50, 16)).enhancement).toBe(16)
    })

    it("durability value should decrease by 5 with an enhancement level 0-14", function () {
      expect(fail(createItem(6, 0)).durability).toBe(1)
      expect(fail(createItem(6, 1)).durability).toBe(1)
      expect(fail(createItem(6, 13)).durability).toBe(1)
      expect(fail(createItem(6, 14)).durability).toBe(1)

      expect(fail(createItem(50, 0)).durability).toBe(45)
      expect(fail(createItem(50, 1)).durability).toBe(45)
      expect(fail(createItem(50, 13)).durability).toBe(45)
      expect(fail(createItem(50, 14)).durability).toBe(45)

      expect(fail(createItem(90, 0)).durability).toBe(85)
      expect(fail(createItem(90, 1)).durability).toBe(85)
      expect(fail(createItem(90, 13)).durability).toBe(85)
      expect(fail(createItem(90, 14)).durability).toBe(85)

      expect(fail(createItem(100, 0)).durability).toBe(95)
      expect(fail(createItem(100, 1)).durability).toBe(95)
      expect(fail(createItem(100, 13)).durability).toBe(95)
      expect(fail(createItem(100, 14)).durability).toBe(95)
    })

    it("enhancement value should not be increased if already at 20", function () {
      expect(() => { fail(createItem(50, 20)) }).toThrowError("20")
    })

  })

  describe("repair()", function () {
    expect(repair(createItem()).durability).toBe(100)
  })

  describe("get()", function () {

  })

})
