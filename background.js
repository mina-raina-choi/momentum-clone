const body = document.querySelector("body")

const IMG_NUMBER = 3

function paintImage(imgNumber) {
  const image = new Image()
  image.src = `./images/${imgNumber}.jpeg`
  image.classList.add("bgImage")
  body.appendChild(image)
}

function genRandom() {
  const number = parseInt(1 + Math.random() * IMG_NUMBER)
  return number
}

function init() {
  const randomNumber = genRandom()
  paintImage(randomNumber)
}

init()
