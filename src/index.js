const dogsURL = "http://localhost:3000/dogs"

const tableContainer = document.getElementById('table-body')

document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
})

function fetchDogs() {
    fetch(dogsURL)
    .then(resp => resp.json())
    .then(arrayOfDogs => {
        arrayOfDogs.forEach(dog => renderDog(dog))
    })
}

const renderDog = (dog) => {
    dogElement = tableRowMaker(dog)
    readyToAppendElement = addDogToElement(dog, dogElement)
    tableContainer.append(readyToAppendElement)
}

function tableRowMaker(dog){
    const tr = document.createElement('tr')
    const tdName = document.createElement('td')
    const tdBreed = document.createElement('td')
    const tdSex = document.createElement('td')
    const tdButton = document.createElement('td')
    const button = document.createElement('button')
    button.style.width = "100%"
    button.textContent = "Edit"
    tdButton.append(button)
    button.addEventListener('click', () => buttonClick(dog))
    tr.append(tdName, tdBreed, tdSex, tdButton)
    return tr
}

const addDogToElement = (dog, element) => {
    const elements = element.queryselectorAll('td')
    elements[0].textContent = dog.name
    elements[1].textContent = dog.breed
    elements[2].textContent = dog.sex
    return element
}

function buttonClick(dog){
    const form = document.getElementById('dog-form')
    form.name.value = dog.name
    form.breed.value = dog.breed
    form.sex.value = dog.sex
}