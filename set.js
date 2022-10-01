/* The Set object lets you store unique values of 
any type, whether primitive values or object references. */

const set = new Set([1,2,3,3,4,5,false,true,false,{},{},'hello','HELLO'])
console.log(set)

Object.getOwnPropertyNames(set.__proto__).forEach(key => 
  console.log(key)
)

// parse Set to Array
let arr = Array.from(set)
console.log(arr)

