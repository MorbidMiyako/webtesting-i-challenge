module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// redundant example item
const item = {
  name: "phoenix sword",
  durability: 100,
  enhancement: 1
}

function succeed(item) {
  item.enhancement ? isNumber(item.enhancement) ? item.enhancement === 20 ? null : item.enhancement += 1 : new Error("item.durability is NaN") : new Error("No item durability")
}
/* is enhancement there ( 
    is enchantment a number ( 
      is enchancement 0-20 ( 
        is enhancement less then 15 ( 
          after reduction durability is durability less than 0 ( 
            destroy item 
          continue ) 
        after reduction durability is durability less than 0 ( 
          destroy item 
        continue )
      error, enhancement level is invalid )
    error enhancement is not a number )
  enhancement is missing ) */
function fail(item) {
  item.enhancement ? isNumber(item.enhancement) ? item.enhancement >= 0 && item.enhancement < 20 ?
    item.enhancement < 15 ? item.durability -= 5(item.durability < 1 ? item = "destroyed" : null) : item.durability -= 10(item.durability < 1 ? item = null : null)
    : new Error("enhancement level is incorrect") : new Error("item.durability is NaN") : new Error("No item durability")
}

function repair(item) {
  item.durability ? isNumber(item.durability) ? item.durability = 100 : new Error("item.durability is NaN") : new Error("No item durability")
}

function get(item) {
  item.enhancement ? isNumber(item.enhancement) ? item.enhancement >= 0 && item.enhancement < 20 ?
    item.enhancement < 1 ? : item.name = `[+${item.enhancement}] ${item.name}`
    : new Error("enhancement level is incorrect") : new Error("item.durability is NaN") : new Error("No item durability")
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
