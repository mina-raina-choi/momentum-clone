const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings")

const USER_LS = "currUser"
const SHOWING_CN = "showing"

function saveName(name) {
  // localStorage는 url 기반으로 동작한다.
  localStorage.setItem(USER_LS, name)
}

function handleSubmit(event) {
  // event 버블링 : 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성
  // form을 제출하는 이벤트가 발생하면 이벤트 버블링이 발생해서
  // document까지 타고 올라가 document가 새로고침됨
  event.preventDefault()
  // submit의 기본동작을 막음
  const currValue = input.value
  console.log(currValue)
  paintGreeting(currValue)
  saveName(currValue)
}

function askForName() {
  form.classList.add(SHOWING_CN)
  form.addEventListener("submit", handleSubmit)
  // 사용자가 input에 텍스트를 입력하고 enter를 클릭하면, input text가 사라짐
  // 마치 새로고침 같이 화면이 다시 그려진다.
  // ! -> 이벤트 없애고 input.value를 처리한다.
}

function paintGreeting(name) {
  form.classList.remove(SHOWING_CN)
  greetings.classList.add(SHOWING_CN)
  greetings.innerText = `Hello ${name}`
}

function loadName() {
  const currUser = localStorage.getItem(USER_LS)
  console.log("currUser", currUser)
  if (currUser === null) {
    // no user
    askForName()
  } else {
    paintGreeting(currUser)
  }
}

function init() {
  loadName()
}

init()
