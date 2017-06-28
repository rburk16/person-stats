function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const color = f.favoriteColor.value

    const div = document.querySelector('#stats')
    const list = document.createElement('ul')
    
    renderList(list,name,age,color)
        
    div.appendChild(list)

}

function renderColor(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

function renderListItem(list,name,age,color) {
    const item1 = document.createElement('li')
    const item2 = document.createElement('li')
    const item3 = document.createElement('li')
    item1.textContent = `Name: ${name}`
    item2.textContent = `Age: ${age}`
    item3.textContent = `Favorite Color: `
    item3.appendChild(renderColor(color))
    list.appendChild(item1)
    list.appendChild(item2)
    list.appendChild(item3)
}

function renderList(list,name,age,color) {
    renderListItem(list,name,age,color)
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)