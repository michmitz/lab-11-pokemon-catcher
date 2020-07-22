// import { pokeData } from './pokemon.js';
// import { pokeDex } from './pokeDex.js';


export function getRandomPokemon(pokeData) {
    const randomPokemon = Math.floor(Math.random() * pokeData.length);
    return pokeData[randomPokemon];
}


// export function getPokemonStatistics() {
//     const rawPokemonData = localStorage.getItem('POKEMON STATS');
//     const parsedPokemonData = JSON.parse(rawPokemonData);

//     if (!rawPokemonData) {
//         const stringyPokemonStats = JSON.stringify(pokeDex);
//         const currentPokemonStats = JSON.parse(stringyPokemonStats); 

//         return currentPokemonStats;
//     }

//     return parsedPokemonData;
// }

export function findByName(someArray, pokemonName) {
    for (let i = 0; i < someArray.length; i++){
        const arrayItem = someArray[i];
        if (pokemonName === arrayItem.pokemon) {
            return arrayItem;} 
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
            caught: 0
        };
        pokemonEncountered.push(newEncounter);
    }
}

export function chosenPokemon(pokemonEncountered, pokemon) {
    let caught = findByName(pokemonEncountered, pokemon);
    
    if (caught) {
        caught.caught++;
    } else {
        const newCapture = {
            pokemon: pokemon,
            encounters: 1,
            caught: 1
        };
        pokemonEncountered.push(newCapture);
    }
}


// export function addEncounters(pokemon, someArray) {
//     const pokeResults = JSON.parse(localStorage.getItem('POKESTATS'));
//     const foundPokemon = findByName(someArray, pokemon);

//     if (foundPokemon) {
//         foundPokemon.encountered++;
//     }
//     const stringyPokemonStats = JSON.stringify(pokeResults);
//     localStorage.setItem('POKESTATS', stringyPokemonStats);
// }

// export function capturePokemon(pokemon, someArray) {
//     const pokeResults = JSON.parse(localStorage.getItem('POKESTATS'));
//     const foundPokemon = findByName(someArray, pokemon);

//     if (foundPokemon) {
//         foundPokemon.captured++;
//     }
//     const stringyPokemonStats = JSON.stringify(pokeResults);
//     localStorage.setItem('POKESTATS', stringyPokemonStats);
// }