let characters = document.querySelector(".characters")
let url = "./scripts/characters.json"



async function getCharacters(requestURL) {
    const response = await fetch(requestURL)

    if (response.ok) {
        const jsObject = await response.json()
        const characters = jsObject["characters"]
        characters.forEach(displayCharacters)
    }
}


function displayCharacters(character) {
    let card = document.createElement("div")
    let img = document.createElement("img")
    let div = document.createElement("div")
    let p = document.createElement("p")
    let h2 = document.createElement("h2")

    card.className = "cardCharacter"
    img.src = character.img
    img.alt = "character"
    p.textContent = character.description
    h2.textContent = character.name
    div.appendChild(h2)
    div.appendChild(p)

    card.appendChild(img)
    card.appendChild(div)

    characters.appendChild(card)
    
}

getCharacters(url)

