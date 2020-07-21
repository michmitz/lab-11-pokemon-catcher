export function getRandomPokemon(pokeData) {
    const randomPokemon = Math.floor(Math.random() * pokeData.length);
    return pokeData[randomPokemon];
}

export function resetPokemon() {
    const randomPokemon1 = getRandomPokemon(pokeData);
    let randomPokemon2 = getRandomPokemon(pokeData);
    let randomPokemon3 = getRandomPokemon(pokeData);

    


    }