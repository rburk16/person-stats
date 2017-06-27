const myArray = []
const arrayList = []

function changeHeading(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const heading = document.querySelector('h1')
    heading.innerHTML = name
    myArray.push(name)
}

function changeParagraph(ev){
    ev.preventDefault()
    const f = ev.target
    const color = f.personColor.value
    const paragraph = document.querySelector('#someString')
    arrayList.push(color)
    paragraph.textContent = myArray[0] + arrayList
    paragraph.style.color = color
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)

const colorForm = document.querySelector('#person-form')
colorForm.addEventListener('submit', changeParagraph)