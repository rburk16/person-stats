function changeHeading(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const heading = document.querySelector('#hometown')
    heading.textContent = name
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)