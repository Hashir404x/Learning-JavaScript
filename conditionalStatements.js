// if else statements
const score = 73
let grade
if (score >= 0 && score <= 30) grade = "D"
else if (score >= 31 && score <= 60) grade = "C"
else if (score >= 61 && score <= 85) grade = "B"
else if (score >= 86 && score <= 100) grade = "A"
else grade = "Invalid score"
console.log("Grade:", grade)

// ternary statement
let age = 34
age >= 18 ? console.log("You can drive") : console.log("You cannot drive")

// switch statement
const color = "Green"
switch (color) {
  case "Blue":
    console.log("I love blue color")
    break
  case "Green":
    console.log("I love green color")
    break
  case "Red":
    console.log("I love red color")
    break
  default:
    console.log("I love all the colors")
}
