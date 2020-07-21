import { pokemonData } from './pokemon.js';
import { getRandomPokemon } from './utils.js';

const nextButton = document.getElementById('next');
const labels = document.querySelectorAll('label');
const pokeData = pokemonData.slice();

function setPokemon() {
    getRandomPokemon(pokeData);

    const randomPokemon1 = getRandomPokemon(pokeData);
    let randomPokemon2 = getRandomPokemon(pokeData);
    let randomPokemon3 = getRandomPokemon(pokeData);

    while (randomPokemon1.id === randomPokemon2.id || randomPokemon1.id === randomPokemon3.id || randomPokemon2.id === randomPokemon3.id) {
        randomPokemon2 = getRandomPokemon(pokeData);
        randomPokemon3 = getRandomPokemon(pokeData);
    }

    const firstLabel = labels[0];
    let input1 = firstLabel.children[0];
    let image1 = firstLabel.children[1];
    let span1 = firstLabel.children[2];

    input1.value = randomPokemon1.id;
    // input1.addEventListener('click', eventHandler);
    image1.src = randomPokemon1.url_image;
    span1.textContent = randomPokemon1.pokemon;

    const secondLabel = labels[1];
    let input2 = secondLabel.children[0];
    let image2 = secondLabel.children[1];
    let span2 = secondLabel.children[2];

    input2.value = randomPokemon2.id;
    // input2.addEventListener('click', eventHandler);
    image2.src = randomPokemon2.url_image;
    span2.textContent = randomPokemon2.pokemon;

    const thirdLabel = labels[2];
    let input3 = thirdLabel.children[0];
    // input3.addEventListener('click', eventHandler);
    let image3 = thirdLabel.children[1];
    let span3 = thirdLabel.children[2];

    input3.value = randomPokemon3.id;
    image3.src = randomPokemon3.url_image;
    span3.textContent = randomPokemon3.pokemon;
}

//Use this event handler if I want to have event on each button.
// function eventHandler() {
    
//     nextButton.classList.remove('hidden');
// }


let pokemonCaptured = [];
let setsOfPokemon = 0;

nextButton.addEventListener('click', () => {
    setsOfPokemon++;
    const clickedPokemon = document.querySelector('input:checked');
    console.log('clicked pokemon', clickedPokemon);
    const userChoice = clickedPokemon.value;
     

    
    // if (pokemonCaptured.length === 10) {
    //     window.location = './results/index.html';
    // }
    setPokemon();
    
});

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



