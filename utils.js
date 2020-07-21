// import { pokeData } from './pokemon.js';


export function getRandomPokemon(pokeData) {
    const randomPokemon = Math.floor(Math.random() * pokeData.length);
    return pokeData[randomPokemon];
}

// export function resetPokemon() {
//     getRandomPokemon();

//     const randomPokemon1 = getRandomPokemon(pokeData);
//     let randomPokemon2 = getRandomPokemon(pokeData);
//     let randomPokemon3 = getRandomPokemon(pokeData);

//     while (randomPokemon1.id === randomPokemon2.id || randomPokemon2.id === randomPokemon3.id || randomPokemon1.id === randomPokemon3.id) {
//         randomPokemon2 = getRandomPokemon(pokeData);
//         randomPokemon3 = getRandomPokemon(pokeData);
//     }

// }