const pokemonList = document.getElementById('pokemonList')
const loadNext = document.querySelector('.nextButton')
const loadPrev = document.querySelector('.prevButton')

const hpBar = document.getElementById('hpBar');

const urlParameters = new URLSearchParams(window.location.search);
const pokemonId = parseInt(urlParameters.get("id"));

const limit = 1
let offset = pokemonId - 1

function loadPokemons(){
    pokeApi.getPokemons().then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#00${pokemon.number}</span>
            <span class="name"><a href="index.html" class="linkPoke">${pokemon.name}</a></span> 

        <div class="detail"> 
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
        
            <img src="${pokemon.photoFront}" 
            alt="${pokemon.name}">
            <img src="${pokemon.photoBack}" 
            alt="${pokemon.name}">
        </div>  
        <br> 
            
                <h4>Base Stats</h4>
                <div id="status">
                    <span>HP</span>
                    <meter value="${pokemon.hp}"></meter>   
                </div> 
    </li>
    `

).join('')
pokemonList.innerHTML = newHtml
})
}

loadPokemons(pokemonId)

loadNext.addEventListener('click', () => {
    offset += 1;
    loadPokemons(offset)
});

loadPrev.addEventListener('click', () => {
    if(offset >= 1){
        offset -= 1;
        loadPokemons(offset)
    }
});







