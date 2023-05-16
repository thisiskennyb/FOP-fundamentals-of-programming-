document.querySelector('button').addEventListener('click', getFetch)

async function getFetch() {
    const isShiny = document.querySelector('#shiny').checked
    const choice = document.querySelector('input').value
    const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

    let data = await fetch(url)
    let pokemonInfo = await data.json()

    let name = pokemonInfo['species']['name']
    let pokeType = pokemonInfo['types'][0]['type']['name']
    let photo = pokemonInfo['sprites']['front_default']
    let photoShiny = pokemonInfo['sprites']['front_shiny']

    document.querySelector('#name').innerHTML = name
    document.querySelector('#type').innerHTML = pokeType

    if (isShiny) {
        document.querySelector('img').src = photoShiny
    }
    else {
        document.querySelector('img').src = photo
    }

    console.log(pokemonInfo['sprites']['front_shiny'])
}