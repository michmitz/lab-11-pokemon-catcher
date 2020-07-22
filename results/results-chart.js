import { mungeNames, mungeCaptured, mungeEncountered, getCart, clearCart } from './results-utils.js';

const ctx = document.getElementById('myChart').getContext('2d');

const pokemonData = getCart();
const mungedNames = mungeNames(pokemonData);
const mungedCaptured = mungeCaptured(pokemonData);
const mungedEncountered = mungeEncountered(pokemonData);

const myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: mungedNames,
        datasets: [{
            label: 'Pokemon Captured',
            data: mungedCaptured,
            backgroundColor:
                'pink',
            borderColor:
                'pink',
            borderWidth: 1
        },
        {
            label: 'Pokemon Encountered',
            data: mungedEncountered,
            backgroundColor: 
                'yellow',
            borderColor: 
                'yellow',
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