const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1")

function getCurrTime() {
  const date = new Date()
  const mins = date.getMinutes(),
    hours = date.getHours(),
    seconds = date.getSeconds()

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`
}

function init() {
  getCurrTime()
  setInterval(getCurrTime, 1000)
}

init()
