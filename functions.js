function sum(a, b) {
  return a + b
}

// arrow function

const sum2 = (a, b) => {
  return a + b
}

// callBack functions
function sayHello() {
  console.log("Hello JavaScript")
}
function callOtherFunction(arg) {
  arg()
  return arg
}
// let x = callOtherFunction(sayHello)
// x()

// forEach, it is an array method and calls callback function on every element of array, it returns nothing
// 3 ways to use callback function with forEach method
const arr = [13, 22, 31, 42]
arr.forEach(function printVal(arg) {
  //   console.log(arg)
})

arr.forEach(function (arg) {
  //   console.log(arg)
})

// 2nd parameter gives indexes
arr.forEach((arg, i) => console.log(`${i}: ${arg}`))

// map, it is similar to forEach method but can return elemets

const names = ["Dave", "Salman", "Amir"]
const updatedNamesArray = names.map((elem) => {
  return elem.concat("@gmail.com")
})

console.log(updatedNamesArray)
