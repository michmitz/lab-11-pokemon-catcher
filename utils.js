export function getRandomPokemon(pokeData) {
    const randomPokemon = Math.floor(Math.random() * pokeData.length);
    return pokeData[randomPokemon];
}

