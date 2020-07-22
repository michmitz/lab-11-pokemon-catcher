import { pokeData } from './pokemon.js';
import { getRandomPokemon, findByName, encounteredPokemon, trapPokemon } from './utils.js';

const nextButton = document.getElementById('next');
const labels = document.querySelectorAll('label');

let pokemonEncountered = [];

function setPokemon() {
    getRandomPokemon(pokeData);

    let randomPokemon1 = getRandomPokemon(pokeData);
    let randomPokemon2 = getRandomPokemon(pokeData);
    let randomPokemon3 = getRandomPokemon(pokeData);

    while (randomPokemon1.pokemon === randomPokemon2.pokemon || randomPokemon1.pokemon === randomPokemon3.pokemon || randomPokemon2.pokemon === randomPokemon3.pokemon) {
        randomPokemon2 = getRandomPokemon(pokeData);
        randomPokemon3 = getRandomPokemon(pokeData);
    }

    const firstLabel = labels[0];
    let input1 = firstLabel.children[0];
    let image1 = firstLabel.children[1];
    let span1 = firstLabel.children[2];

    input1.value = randomPokemon1.pokemon;
    image1.src = randomPokemon1.url_image;
    span1.textContent = randomPokemon1.pokemon;
    encounteredPokemon(pokemonEncountered, randomPokemon1.pokemon);

    const secondLabel = labels[1];
    let input2 = secondLabel.children[0];
    let image2 = secondLabel.children[1];
    let span2 = secondLabel.children[2];

    input2.value = randomPokemon2.pokemon;
    image2.src = randomPokemon2.url_image;
    span2.textContent = randomPokemon2.pokemon;
    encounteredPokemon(pokemonEncountered, randomPokemon2.pokemon);


    const thirdLabel = labels[2];
    let input3 = thirdLabel.children[0];
    let image3 = thirdLabel.children[1];
    let span3 = thirdLabel.children[2];

    input3.value = randomPokemon3.pokemon;
    image3.src = randomPokemon3.url_image;
    span3.textContent = randomPokemon3.pokemon;
    encounteredPokemon(pokemonEncountered, randomPokemon3.pokemon);

}


let counter = 10;


nextButton.addEventListener('click', () => {
    counter--;
        
    const clickedPokemon = document.querySelector('input:checked');
    const pokemonTarget = clickedPokemon.value;
    const pokemonInCart = findByName(pokeData, pokemonTarget);

    trapPokemon(pokemonEncountered, pokemonInCart.pokemon);

    const stringyPokemonData = JSON.stringify(pokemonEncountered);
    localStorage.setItem('POKESTATS', stringyPokemonData);

    if (counter === 0) {
        alert('You captured 10 pokemon!');
        window.location = './results/index.html';
    }
   
    setPokemon();
    
});

setPokemon();

// nextButton.addEventListener('click', setPokemon);
// setPokemon();
// // const clickedPokemon = document.querySelector('input:checked');
// console.log('clicked pokemon', clickedPokemon);


// let rounds = 0;
// let pokemonCaptured = [];
// let pokemonEncountered = [];

// function eventHandler() {
    
    // console.log(e.target.value);
   
    // const userChoice = e.target.value;
    // pokemonEncountered.push(userChoice);
    // pokemonCaptured.push(userChoice);

    // input1.disabled = true;
    // input2.disabled = true;
    // input3.disabled = true;

    // const guessDiv = document.getElementById('guesses');
    // guessDiv.classList.add('disabled');
    // nextButton.classList.remove('hidden');

    // resetPokemon();

    // if (pokemonCaptured.length === 10) {
    //     window.location = './results/index.html';
    // }

// }



