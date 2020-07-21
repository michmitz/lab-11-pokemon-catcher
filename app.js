import { pokeData } from './pokemon.js';
import { getRandomPokemon } from './utils.js';

const nextButton = document.getElementById('button');
const labels = document.querySelectorAll('label');

const randomPokemon1 = getRandomPokemon(pokeData);
let randomPokemon2 = getRandomPokemon(pokeData);
let randomPokemon3 = getRandomPokemon(pokeData);

while (randomPokemon1.id === randomPokemon2.id || randomPokemon2.id === randomPokemon3.id || randomPokemon1.id === randomPokemon3.id) {
    randomPokemon2 = getRandomPokemon(pokeData);
    randomPokemon3 = getRandomPokemon(pokeData);
}


const firstLabel = labels[0];
const input1 = firstLabel.children[0];
const image1 = firstLabel.children[1];
const span1 = firstLabel.children[2];

input1.value = randomPokemon1.id;
// input1.addEventListener('click', eventHandler);
image1.src = randomPokemon1.url_image;
span1.textContent = randomPokemon1.pokemon;

const secondLabel = labels[1];
const input2 = secondLabel.children[0];
const image2 = secondLabel.children[1];
const span2 = secondLabel.children[2];

input2.value = randomPokemon2.id;
// input2.addEventListener('click', eventHandler);
image2.src = randomPokemon2.url_image;
span2.textContent = randomPokemon2.pokemon;

const thirdLabel = labels[2];
const input3 = thirdLabel.children[0];
// input3.addEventListener('click', eventHandler);
const image3 = thirdLabel.children[1];
const span3 = thirdLabel.children[2];

input3.value = randomPokemon3.id;
image3.src = randomPokemon3.url_image;
span3.textContent = randomPokemon3.pokemon;

nextButton.addEventListener('click', eventHandler);

// const clickedPokemon = document.querySelector('input:checked');
// console.log('clicked pokemon', clickedPokemon);

let rounds = 0;
let pokemonCaptured = [];
let pokemonEncountered = [];

function eventHandler(e) {
    rounds++;

    console.log(e.target.value);
   
    const userChoice = e.target.value;
    pokemonEncountered.push(userChoice);
    pokemonCaptured.push(userChoice);

    if (pokemonCaptured.length === 10) {
        window.location = './results/index.html';
    }

}


