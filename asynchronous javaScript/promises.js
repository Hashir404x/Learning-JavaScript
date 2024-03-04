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

// fetchProfileData(25).then((res) => {
//   console.log(res.message)
//   fetchProfileImages(res.imageId).then((res) => {
//     console.log(res)
//     fetchImageComments(44)
//       .then((res) => console.log(res))
//       .catch((message) => console.error(message))
//   })
// })

// 2nd and better way of promise chaining

fetchProfileData(25)
  .then((res) => {
    console.log(res.message)
    return fetchProfileImages(res.imageId)
  })
  .then((res) => {
    console.log(res)
    return fetchImageComments(44)
  })
  .then((res) => console.log(res))
  .catch((message) => console.log(message))
