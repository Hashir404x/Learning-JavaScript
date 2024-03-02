document.title = "TIC TAC TOE"

const body = document.body

const heading = document.createElement("h1")
heading.innerText = "TIC TAC TOE"
heading.style.textAlign = "center"
heading.style.marginTop = "20px"
body.append(heading)

const container = document.createElement("div")
const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
}
Object.assign(container.style, containerStyles)
body.append(container)

const gameBoard = document.createElement("div")
const gameBoardStyles = {
  width: "300px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "8px",
  padding: "20px"
}
Object.assign(gameBoard.style, gameBoardStyles)
container.append(gameBoard)

const result = document.createElement("p")
const resultStyles = {
  color: "green",
  fontSize: "22px",
  fontWeight: "600"
}
Object.assign(result.style, resultStyles)
container.append(result)

const resetButton = document.createElement("button")
const resetButtonStyles = {
  padding: "4px",
  borderRadius: "10px"
}
resetButton.innerText = "Reset game"
Object.assign(resetButton.style, resetButtonStyles)
container.append(resetButton)
resetButton.addEventListener("click", () => {
  allBoxes.forEach((box) => enableBox(box))
  result.innerText = ""
})

let newBox
const boxStyles = {
  width: "90px",
  height: "90px",
  border: "none",
  borderRadius: "10px",
  backgroundColor: "purple",
  fontSize: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white"
}
for (let i = 0; i < 9; i++) {
  newBox = document.createElement("div")
  newBox.setAttribute("class", "box")
  Object.assign(newBox.style, boxStyles)
  gameBoard.append(newBox)
}

let turnO = true
let clickCount = 0

const allBoxes = document.querySelectorAll(".box")
for (let box of allBoxes) {
  box.addEventListener("click", (b) => {
    if (turnO) {
      b.target.innerText = "O"
      turnO = false
    } else {
      b.target.innerText = "X"
      turnO = true
    }
    disableBox(b.target)
    checkWinner()
  })
}

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]

function checkWinner() {
  clickCount++
  for (let pattern of winningPatterns) {
    if (
      allBoxes[pattern[0]].innerText !== "" &&
      allBoxes[pattern[0]].innerText === allBoxes[pattern[1]].innerText &&
      allBoxes[pattern[1]].innerText === allBoxes[pattern[2]].innerText
    ) {
      result.innerText = `Winner is ${allBoxes[pattern[0]].innerText}`
      allBoxes.forEach((box) => disableBox(box))
    } else if (clickCount === 9) {
      result.innerText = `Game draw`
      allBoxes.forEach((box) => disableBox(box))
    }
  }
}

function disableBox(box) {
  box.style.pointerEvents = "none"
  box.style.opacity = "0.6"
}

function enableBox(box) {
  box.style.pointerEvents = ""
  box.style.opacity = "1"
  box.innerText = ""
  clickCount = 0
  turnO = true
}
