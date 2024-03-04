function getData(id, nextStep) {
  setTimeout(() => {
    console.log("Data with id: ", id)
    if (nextStep) nextStep()
  }, 2000)
}

getData(12, () => getData(120, () => getData(200, () => getData(240))))
