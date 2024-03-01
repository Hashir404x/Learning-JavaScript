// Ques: 1
const h1 = document.querySelector("h1")
h1.innerText = h1.innerText.concat(" from Hashir")

// Ques: 2
const boxes = document.getElementsByClassName("box")
for (let i = 0; i < boxes.length; i++) {
  boxes[i].innerText = `Box: ${i + 1}`
  boxes[i].style.color = "blue"
  boxes[i].style.border = "2px solid black"
  boxes[i].style.margin = "20px"
  boxes[i].style.width = "100px"
  boxes[i].style.height = "50px"
  boxes[i].style.fontSize = "20px"
  boxes[i].style.fontWeight = "600"
}

// set and get attributes
const helloParagraph = document.getElementById("helloId")
// getting class attribute
const helloParagraphClass = helloParagraph.getAttribute("class")
// setting class attribute
helloParagraph.setAttribute("class", "helloParaClass")

// creating new elements and appending them into body
const newDiv = document.createElement("div")
newDiv.innerHTML =
  "<h3>I am h2 tag created through javaScript</h3><p>I am new p tag created through javaScript</p>"
// append() is used to append element to the parent as the last child of the parent
document.body.append(newDiv)

// prepend() is used to append element to the parent as the first child of the parent
document.body.prepend(newDiv)

// before() is to append element before a node
document.querySelector("#helloId").before(newDiv)

// after() is to append element after a node
document.querySelector("#helloId").after(newDiv)

// remove() is used to remove element
newDiv.remove()

newDiv.appendChild()
