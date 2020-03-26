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
    })

    it("enhancement value should be a number", function () {
      expect(succeed(createItem(50, {}))).toBe(NaN)
    })

    it.todo("enhancement key should be present")
    it.todo("enhancement value should be between 0 and 20")
    it.todo("enhancement value should not increase 20")
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
