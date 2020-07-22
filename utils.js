export function getRandomPokemon(pokeData) {
    const randomPokemon = Math.floor(Math.random() * pokeData.length);
    return pokeData[randomPokemon];
}

export function findByName(someArray, pokemonName) {
    for (let i = 0; i < someArray.length; i++){
        const arrayItem = someArray[i];
        if (pokemonName === arrayItem.pokemon) {
            return arrayItem;
        } 
    } return null;
}

export function encounteredPokemon(pokemonEncountered, pokemon) {
    let encountered = findByName(pokemonEncountered, pokemon);

    if (encountered) {
        encountered.encounters++;
    } else {
        const newEncounter = {
            pokemon: pokemon,
            encounters: 1,
            timesCaught: 0
        };
        pokemonEncountered.push(newEncounter);
    }
}

export function trapPokemon(pokemonEncountered, pokemonName) {
    let trappedPokemon = findByName(pokemonEncountered, pokemonName);
    trappedPokemon.timesCaught++;

}
