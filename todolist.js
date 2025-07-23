let container = document.querySelector('.container')
let textBar = document.querySelector('.text')
let addIcon = document.querySelector('.addIcon')
let listItems = document.querySelector('.listItems')
let toDo = JSON.parse(localStorage.getItem("myList")) || [];

function addToDo() {
    addIcon.addEventListener('click', () => {
        let inputToDo = textBar.value.trim()
        if(inputToDo !== '') {
            toDo.push(inputToDo)
            textBar.value = ''
            localStorage.setItem("myList", JSON.stringify(toDo))
            printToDo()
        }
    })
}
addToDo()

function printToDo() {
    listItems.innerHTML = ``
    toDo.forEach((item, index) => {
        let li = document.createElement('li')
        li.innerHTML = `${item} <i class="fas fa-trash"></i>`
        listItems.appendChild(li)

        let trash = li.querySelector('i')
        trash.addEventListener('click', () => {
            toDo.splice(index, 1)
            localStorage.setItem("myList", JSON.stringify(toDo))
            printToDo()
        })
    })
}
printToDo()