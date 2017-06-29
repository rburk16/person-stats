function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const color = f.favoriteColor.value

    const div = document.querySelector('#stats')
    
    renderColor(color)

    div.appendChild(renderList("Name",name,"Age",age,"Favorite Color",color))

}

function renderColor(color) {
    const colorDiv = document.createElement('div')
    const colorItem = document.createElement('li')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'

    return colorDiv
}

function renderListItem(prop,value) {
    const item = document.createElement('li')
    item.textContent = `prop: ${value}`
    return item
}

function renderList(prop1,propValue1,prop2,propValue2,prop3,propValue3) {
    const list = document.createElement('ul')
    list.appendChild(renderListItem(prop1,propValue1))
    list.appendChild(renderListItem(prop2,propValue2))
    list.appendChild(renderListItem(prop3,propValue3))
    list.appendChild(renderColor(propValue3))
    return list
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)