function fetchProfileData(id) {
  return new Promise((res, rej) => {
    setTimeout(
      () =>
        res({
          id: 12,
          imageId: 5,
          message: `Profile data successfully fetched for id: ${id}`
        }),
      3000
    )
  })
}

function fetchProfileImages(imageId) {
  return new Promise((res, rej) => {
    setTimeout(
      () => res(`Profile image data fetched successfully for id: ${imageId}`),
      3000
    )
  })
}

function fetchImageComments(imageId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (imageId < 20)
        res(`Data for image with id ${imageId} comments fetched successfully`)
      else rej(`Data for image with id ${imageId} comments cannot be fetched`)
    }, 1500)
  })
}

// IIFE function, Immediately Invoked Function Expression
;(async function () {
  try {
    let res = await fetchProfileData(25)
    console.log(res.message)
    let res2 = await fetchProfileImages(res.imageId)
    console.log(res2)
    let res3 = await fetchImageComments(44)
    console.log(res3)
  } catch (err) {
    console.log("Error occurd")
    console.log(err)
  }
})()
