// by using try catch, our code execution will not stop and we can catch our errors
let a = 100,
  b = 200

console.log(a + b)
console.log(a + b + 200)

try {
  // generating error on purpose
  console.log(a + l)
} catch (err) {
  console.log("Error found: \n", err)
}

console.log(a + b + 300)
console.log(a + b + 400)
