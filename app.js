url ='https://rickandmortyapi.com/api/character'
const containerCards = document.getElementById('cards-container')
const urlFilter = "https://rickandmortyapi.com/api/character/?name="
const txtCharacter =document.getElementById('txt-character')

const getCharacter = async (URL) => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data.results[0].name);
    data.results.forEach(element => {
        console.log(element.name);
        console.log(element.image);
        makeCharacter (element) 
    });
}
getCharacter(url)

const makeCharacter = (myCharacter) => {
    const card = document.createElement('div')
    card.classList.add('card')
    
    const imgCard = document.createElement('img')
    imgCard.src=myCharacter.image
    imgCard.alt=myCharacter.name
    
    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content')
    
    const nameCard = document.createElement('h2')
    nameCard.textContent = myCharacter.name

    const genderCard = document.createElement('p')
    genderCard.textContent = myCharacter.gender

    card.appendChild(imgCard)
    card.appendChild(cardContent)

    cardContent.appendChild(nameCard)
    cardContent.appendChild(genderCard)
    
    containerCards.appendChild(card)
}

const getCharacterByName = async (event) => {
    containerCards.innerHTML = ""
    await getCharacter(urlFilter+event.target.value)
}
txtCharacter.addEventListener("keyup", getCharacterByName)