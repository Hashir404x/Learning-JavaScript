// pototype sharing, by using __proto__ we can copy methods of one object into another
const Student1 = {
  stdName: "Hashir",
  age: 21,
  printName() {
    console.log("Name: ", this.stdName)
  },
  printHello() {
    console.log("Hello JavaScript")
  }
}

const Student2 = {
  stdName: "Ali",
  age: 26
}

Student2.__proto__ = Student1
// Student2.printName()

// classes
class Person {
  name
  age
  country
  constructor(n, a, c) {
    this.name = n
    this.country = c
    this.age = a
  }
  getName() {
    return this.name
  }
  setAge(a) {
    this.age = a
  }
  printPerson() {
    console.log(
      "Name: ",
      this.name,
      "\nAge: ",
      this.age,
      "\nCountry: ",
      this.country
    )
  }
  sayHello() {
    console.log("Hello, I am a Person")
  }
}

const p1 = new Person("Hashir Mahmood", 21, "Pakistan")

// inheritance
class Student extends Person {
  rollNo
  CGPA
  constructor(n, a, c, r, cg) {
    super(n, a, c)
    this.rollNo = r
    this.CGPA = cg
  }
  printStudent() {
    this.printPerson()
    console.log("Roll no: ", this.rollNo, "\nCGPA: ", this.CGPA)
  }
  sayHello() {
    super.sayHello()
    console.log("and I am also a Student")
  }
}

const s1 = new Student("Hashir Mahmood", 21, "Pakistan", "0774", 3.63)
s1.sayHello()
