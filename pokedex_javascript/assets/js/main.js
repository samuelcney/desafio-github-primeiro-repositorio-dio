
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0


function verDetalhes(pokemonId){
    window.location.href = `details.html?id=${pokemonId}`
    
}

function loadPokemons(offset, limit){

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#00${pokemon.number}</span>
                <span class="name">${pokemon.name}</span> 
        
                <div class="detail"> 
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        <button id="detail_btn" onclick="verDetalhes(${pokemon.number})">detail</button>
                    </ol>
                
                    <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
                </div>   
            </li>
            `
        ).join('')
        pokemonList.innerHTML += newHtml
})
}

loadPokemons(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qntRecord = offset + limit

    if (qntRecord >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemons(offset, newLimit)
        
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemons(offset, limit)
    }
    
})

