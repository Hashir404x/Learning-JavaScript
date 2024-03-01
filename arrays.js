// question 1
const marks = [87, 23, 65, 42, 94, 76]
let sum = 0
for (let i of marks) sum = sum + i
const avg = (sum / marks.length).toFixed(2)
// console.log(`Average marks: ${avg}`)

// question 2
const prices = [250, 645, 300, 900, 50]
let offer = 0
for (let i = 0; i < prices.length; i++) {
  offer = prices[i] / 10
  prices[i] = prices[i] - offer
}

// array methods

let arr = [1, 2, "cat", 3]
let temp

// push, inserts the given element at the end of array and returns new length of array
temp = arr.push("sun", 23)

// pop, removes and returns last element from the array
temp = arr.pop()

// toString, it returns array as a string
temp = arr.toString()

// concat, joins to arrays and returns
arr = arr.concat(["ice", 98])

// unshift, inserts given element in the start of array
arr.unshift(112)

// shift, removes and returns first element from the array
temp = arr.shift()

// slice, returns a part of array according to provided indexes
temp = arr.slice(2, 5)

// splice, changes the array by removing, inserting elements with respect to provided index
arr.splice(2, 3, "coffee")

// every, it accepts a function which takes an argument and tests it according to given condition and return true or false, that function is applied on every element of the array, if all elements are returned true by the function, this method returns true else false
arr = [12, 2, 32, 4]
function isEven(arg) {
  if (arg % 2 === 0) return true
  else return false
}
temp = arr.every(isEven)

// filter, it is just like the "every" method, but it returns an array of elements which fulfil the condition
arr = [12, 5, 64, 97, 4]
function isOdd(arg) {
  if (arg % 2 === 1) return true
  else return false
}
temp = arr.filter(isOdd)

// find, it is just like the "filter" method, but it only returns the first element which fulfils the condition
temp = arr.find(isOdd)

// reduce, it reduces all the array elements by applying provided operation, into 1 output, we can also provide a starting value e.g here I provided 0
arr = [1, 2, 13, 4, 5]
const total = arr.reduce((res, current) => res + current, 0)
const largestElement = arr.reduce((res, current) => {
  if (current > res) return current
  else return res
}, 0)
console.log(largestElement)

// there are many more useful array methods available, i can check and learn from mdn docs when needed
