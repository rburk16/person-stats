function changePage(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const color = f.personColor.value

    const heading = document.querySelector('#stats')
    const p = document.createElement('p')

    p.textContent = `${name}, ${color}`
    p.style.color = color

    heading.appendChild(p)
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changePage)