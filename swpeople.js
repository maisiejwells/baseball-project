
import { people } from './starwars/people.js'
import { planets } from './starwars/planets.js'
// import { species } from './starwars/species'


const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

const allHomeWorlds = people.map(person => {
    //console.log(getLastNumber(person.url))
    let foundWorld = planets.find(planet => {
        return planet.url === person.homeworld
    })
    let imageURL = getLastNumber(person.url)
    return {
        height: person.height,
        mass: person.mass,
        gender: person.gender,
        hair_color: person.hair_color,
        name: person.name,
        home: foundWorld.name,
        birth_year: person.birth_year,
        imagePath:`https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`,
        imagePlanets:`https://starwars-visualguide.com/#/planets/${imageURL}`
    }
})

console.log(allHomeWorlds)

const mainContainer = document.querySelector('.container')

allHomeWorlds.forEach((person) => {
// console.log("test")
    //card container
    let cardContainer = document.createElement('div')
    cardContainer.className = "card"
    cardContainer.addEventListener('click', function() {
        console.log('click')
        cardContainer.classList.toggle('is-flipped');
    })


    //back of card
    let cardBack = document.createElement('div')
    let cardInfo = document.createElement('div')
    cardInfo.className = "info"
    let height = document.createElement('p')
    height.textContent = 'height: ' + person.height
    let mass = document.createElement('p')
    mass.textContent = 'mass: ' + person.mass
    let gender = document.createElement('p')
    gender.textContent = 'gender: ' + person.gender
    let hair_color = document.createElement('p')
    hair_color.textContent = 'hair color: ' + person.hair_color
    let backImage = document.createElement('img')
    backImage.className = "backImg"
    backImage.src = './starslogo.png'
    cardBack.className = "card__face card__face--back"
    cardBack.appendChild(backImage)
    cardInfo.appendChild(height)
    cardBack.appendChild(cardInfo)
    cardInfo.appendChild(mass)
    cardBack.appendChild(cardInfo)
    cardInfo.appendChild(hair_color)
    cardBack.appendChild(cardInfo)
    cardInfo.appendChild(gender)
    cardBack.appendChild(cardInfo)


    //front of card
    let personElement = document.createElement('div')
    personElement.className = "card__face card__face--front"

    let planetElement = document.createElement('p')
    planetElement.className = "planetName"
    let birthYear = document.createElement('p')
    let imageElement = document.createElement('img')

    let imagePlanet = document.createElement('img')

    personElement.textContent = person.name
    planetElement.textContent = person.home
    birthYear.textContent = person.birth_year
    imageElement.src = person.imagePath

    imagePlanet.src = person.imagePlanet


    cardContainer.appendChild(personElement)
    cardContainer.appendChild(cardBack)


    personElement.appendChild(planetElement)
    personElement.appendChild(birthYear)
    personElement.appendChild(imageElement)
    // mainContainer.appendChild(personElement)

    personElement.appendChild(planetElement)
    // personElement.appendChild(imagePlanet)

    mainContainer.appendChild(cardContainer)
    // document.body.appendChild(mainContainer)

})


let SwCard = document.querySelector('.card');

SwCard.addEventListener( 'click', function() {
    console.log('click')
    SwCard.classList.toggle('is-flipped');
});

// let test3 = document.createElement('p')
// test3.textContent = "hello"
// let testThing = document.querySelector('.card')
// testThing.appendChild(test3)

const newStarWarsButton = document.querySelector('button')


newStarWarsButton.addEventListener('click', function() {
let newStarName = prompt('Enter the name of your new Star Wars Character')
// let input = document.querySelector('button').value
//createStarWarsCard(new Star(newPokeName))
    newCard(newStarName)
});


class Star {
    constructor(name) {
        this.id = 0,
        this.name = name
    }
}


function newCard(name) {
    // let card = document.createElement('div')
    // card.className = 'card'
    let cardContainer = document.createElement('div')
    let label = document.createElement('h2')
    label.className = "label"
    label.innerText = name
    cardContainer.appendChild(label)
    // cardContainer.innerText = name
    cardContainer.className = "card"
    cardContainer.addEventListener('click', function() {
        console.log('click')
    cardContainer.classList.toggle('is-flipped');
})



//back of card
let cardBack = document.createElement('div')
let backImage = document.createElement('img')
backImage.src = './starslogo.png'
cardBack.className = "card__face card__face--back"
cardBack.appendChild(backImage)

mainContainer.appendChild(cardContainer)
// cardContainer.appendChild(personElement)
cardContainer.appendChild(cardBack)


let imageSaber = document.createElement('img')
imageSaber.className = "saberpic"
imageSaber.src = "./images/lightsaber.jpg"
cardContainer.appendChild(imageSaber)


}



