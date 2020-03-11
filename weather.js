const weather = document.querySelector(".js-weather")

const COORDS = "coords"
const API_KEY = "b094bb6c2c2da0c401b050e27e6fbaac"

function getWeather(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=37.566535&lon=126.97796919999999&appid=b094bb6c2c2da0c401b050e27e6fbaac&units=metric`
  )
    .then(data => {
      return data.json()
    })

    .then(data => {
      console.log(data)
      const temp = data.main.temp
      const place = data.name
      weather.innerText = `${temp} at ${place}`
    })
}

function saveCoords(obj) {
  console.log(obj)
  localStorage.setItem(COORDS, JSON.stringify(obj))
}

function handleGeoSuccess(position) {
  console.log(position)
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  const coordsObj = {
    latitude,
    longitude
  }

  saveCoords(coordsObj)
  getWeather(latitude, longitude)
}
function handleGeoError() {
  console.log("error")
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS)
  console.log("loadedCoords", loadedCoords)
  if (loadedCoords === null) {
    askForCoords()
  } else {
    // getWeather
    const parsed = JSON.parse(loadedCoords)
    getWeather(parsed.latitude, parsed.longitude)
  }
}

function init() {
  loadCoords()
}

init()
