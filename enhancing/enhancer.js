module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// redundant example item
const item = {
  name: "phoenix sword",
  durability: 10,
  enhancement: "hey"
}

function succeed(item) {
  if (item.enhancement || item.enhancement === 0) {
    if (isNumber(item.enhancement)) {
      if (item.enhancement >= 0 && item.enhancement <= 20) {
        if (item.enhancement === 20) {
          throw new Error("enhancementlevel already at 20")
        }
        else { item.enhancement += 1 }
      }
      else { throw new Error("enhancement level is incorrect") }
    }
    else { throw new Error("item.enhancement is NaN") }
  }
  else { throw new Error("No item enhancement") }

  return item
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
  if (item.enhancement || item.enhancement === 0) {
    if (isNumber(item.enhancement)) {
      if (item.enhancement >= 0 && item.enhancement <= 20) {
        if (item.enhancement < 15) {
          item.durability -= 5
          if (item.durability < 1) {
            throw new Error("item reached durability below 1 and has been destroyed")
          }
          else { null }
        }
        else {
          if (item.enhancement === 20) {
            throw new Error("enhancementlevel already at 20")
          }
          else {
            item.durability -= 10
            if (item.durability < 1) {
              item = null
            }
            else {
              if (item.enhancement > 16) {
                item.enhancement -= 1
              } else {
                null
              }
            }
          }
        }
      }
      else { throw new Error("durability level is incorrect") }
    }
    else { throw new Error("item.durability is NaN") }
  }
  else { throw new Error("No item durability") }
  return item
}

function repair(item) {
  if (item.durability) {
    if (isNumber(item.durability)) {
      if (item.durability >= 0 && item.durability < 100) {
        item.durability = 100
      }
      else {
        if (item.durability === 100) {
          throw new Error("durability level is already 100")
        }
        else {
          throw new Error("durability level is incorrect")
        }
      }
    }
    else { throw new Error("item.durability is NaN") }
  }
  else { throw new Error("No item durability") }
  return item
}

function get(item) {
  if (item.enhancement) {
    if (isNumber(item.enhancement)) {
      if (item.enhancement >= 0 && item.enhancement < 20) {
        if (item.enhancement < 1) {
          null
        }
        else { item.name = `[+${item.enhancement}] ${item.name}` }
      }
      else { throw new Error("enhancement level is incorrect") }
    }
    else { throw new Error("item.durability is NaN") }
  }
  else { new Error("No item durability") }
  return item
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

// console.log(get(item))
// console.log(repair(item))
// console.log(fail(item))
// console.log(succeed(item))
