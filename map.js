/* The Map object holds key-value pairs and remembers 
the original insertion order of the keys. Any value 
(both objects and primitive values) may be used as 
either a key or a value. */

const map = new Map()

map.set("name", "a1nz")
map.set("age", "22")
map.set("city", "cix")

console.log(map)

console.log(map.has("name")) // true
console.log(map.has("email")) // false

console.log(map.get("name")) // a1nz
console.log(map.set("age", 24))

/* You can generate non-strings keys */
map.set(19, '19')
map.set(false, 'false')
map.set({},{})

for(let [key,value] of map) {
  console.log(`Key: ${key}, Value: ${value}`)
}

const map2 = new Map([
  ["name", "a1nz"],
  ["age", "22"],
  [null, "null"],
  [function(){}, "random anonymous function"]
])

const keyMap = [...map2.keys()]
const valueMap = [...map2.values()]

console.log(keyMap)
console.log(valueMap)
