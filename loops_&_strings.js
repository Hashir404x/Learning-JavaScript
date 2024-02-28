// loops

// for loop
for (let i = 0; i < 10; i++) {
  //   console.log(i)
}

// for-of loop (used with strings and arrays)
const str1 = "Pakistan"
for (let i of str1) {
  //   console.log(i)
}

// for-in loop (mostly used with objects, can also be used with arrays)
const Student = {
  rollNo: "BSCS0774",
  name: "Hashir Mahmood",
  city: "Lahore",
  age: 21
}
for (let i in Student) {
  //   console.log(i, ":", Student[i])
}

// while loop
let i = 0
while (i <= 15) {
  //   console.log(i)
  i++
}

// do-while loop
let j = 1
do {
  //   console.log(j)
  j++
} while (j > 10)

console.log(100)
