import { mungeNames, mungeCaptured, mungeEncountered, getCart, clearCart } from './results-utils.js';

const ctx = document.getElementById('myChart').getContext('2d');

const pokemonData = getCart();
const mungedNames = mungeNames(pokemonData);
const mungedCaptured = mungeCaptured(pokemonData);
const mungedEncountered = mungeEncountered(pokemonData);

const replayButton = document.getElementById('play-again');

const myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: mungedNames,
        datasets: [{
            label: 'Pokemon Captured',
            data: mungedCaptured,
            backgroundColor:
                'white',
            borderColor:
                'white',
            borderWidth: 1
        },
        {
            label: 'Pokemon Encountered',
            data: mungedEncountered,
            backgroundColor: 
                'rgb(255,250,205)',
            borderColor: 
                'rgb(255,250,205)',
            borderWidth: 1
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


Chart.defaults.global.defaultFontColor = 'yellow'; // eslint-disable-line

replayButton.addEventListener('click', () => {
    clearCart();
    window.location = '../index.html';

});