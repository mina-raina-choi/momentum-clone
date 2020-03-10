const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = "toDos"

let toDos = []

function deleteTodo(event) {
  // 클릭된 버튼의 부모
  // console.log(event.target.parentNode)
  const btn = event.target
  const li = btn.parentNode
  toDoList.removeChild(li)

  const cleanTodos = toDos.filter(todo => todo.id !== parseInt(li.id))
  console.log(cleanTodos)

  toDos = cleanTodos
  saveTodos()
}

function saveTodos() {
  // localStorage는 스트링으로 저장됨
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function paintDoto(text) {
  console.log(text)
  const li = document.createElement("li")
  const delBtn = document.createElement("button")
  const span = document.createElement("span")
  const newId = toDos.length + 1

  delBtn.innerText = "X"
  delBtn.addEventListener("click", deleteTodo)
  span.innerText = text
  li.appendChild(delBtn)
  li.appendChild(span)
  li.id = newId
  toDoList.appendChild(li)

  const toDoObj = {
    text: text,
    id: newId
  }

  toDos.push(toDoObj)

  saveTodos()
}

function handleSubmit(event) {
  event.preventDefault()
  const currValue = toDoInput.value
  paintDoto(currValue)
  toDoInput.value = ""

  console.log("toDos", toDos)
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(TODOS_LS)
  if (loadedTodos !== null) {
    const parsed = JSON.parse(loadedTodos)
    parsed.forEach(todo => paintDoto(todo.text))
    console.log(parsed)
  }
}

function init() {
  loadTodos()
  toDoForm.addEventListener("submit", handleSubmit)
}

init()
