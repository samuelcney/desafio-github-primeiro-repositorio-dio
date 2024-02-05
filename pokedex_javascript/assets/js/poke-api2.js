
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type 

    pokemon.photoFront = pokeDetail.sprites.versions["generation-v"]["black-white"].animated.front_default

    pokemon.photoBack = pokeDetail.sprites.versions["generation-v"]["black-white"].animated.back_default

    pokemon.weight = pokeDetail.weight
    pokemon.height = pokeDetail.height

    pokemon.hp = pokeDetail.stats[0].base_stat

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = () => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) 
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) => pokemonDetails)
}   