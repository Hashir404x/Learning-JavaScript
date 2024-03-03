const allImages = document.querySelectorAll("img")
const resetButton = document.querySelector("button")
const selection = document.querySelector("#selection")
const result = document.querySelector("#result")
const yourScr = document.querySelector("#your-score")
const compScr = document.querySelector("#comp-score")

allImages.forEach((img) => {
  img.addEventListener("click", (e) => giveResult(e.target))
})

let clickedImageId
const compChoices = ["paper", "scissors", "stone"]
let compChoice
let yScr = 0,
  cScr = 0

function giveResult(img) {
  compChoice = compChoices[Math.floor(Math.random() * 3)]
  clickedImageId = img.getAttribute("id")
  if (clickedImageId === compChoice) draw(clickedImageId, compChoice)
  else {
    if (clickedImageId === "paper" && compChoice === "stone")
      youWins(clickedImageId, compChoice)
    else if (clickedImageId === "scissors" && compChoice === "paper")
      youWins(clickedImageId, compChoice)
    else if (clickedImageId === "stone" && compChoice === "scissors")
      youWins(clickedImageId, compChoice)
    else compWins(clickedImageId, compChoice)
  }
}

function youWins(yourChoice, compChoice) {
  selection.innerText = `You selected: ${yourChoice} \n Computer selected: ${compChoice}`
  yScr++
  yourScr.innerText = yScr
  result.innerText = "You Win"
}

function compWins(yourChoice, compChoice) {
  selection.innerText = `You selected: ${yourChoice} \n Computer selected: ${compChoice}`
  cScr++
  compScr.innerText = cScr
  result.innerText = "Computer Win"
}

function draw(yourChoice, compChoice) {
  selection.innerText = `You selected: ${yourChoice} \n Computer selected: ${compChoice}`
  result.innerText = "DRAW"
}

resetButton.addEventListener("click", () => {
  cScr = 0
  yScr = 0
  yourScr.innerText = 0
  compScr.innerText = 0
  selection.innerText = ""
  result.innerText = ""
})
