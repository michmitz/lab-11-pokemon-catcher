export function mungeCaptured(pokemonArray) {
    const captures = [];
    
    for (let i = 0; i < pokemonArray.length; i++) {
        const pokemon = pokemonArray[i];
        
        captures.push(pokemon.timesCaught);

    }
    
    return captures;

}

export function mungeEncountered(pokemonArray) {
    const encounters = [];
    
    for (let i = 0; i < pokemonArray.length; i++) {
        const pokemon = pokemonArray[i];
        
        encounters.push(pokemon.encounters);

    }
    
    return encounters;

}

export function mungeNames(pokemonArray) {
    const names = [];

    for (let i = 0; i < pokemonArray.length; i++) {
        const pokemon = pokemonArray[i];

        names.push(pokemon.pokemon);
    }
    
    return names;
}

export function getCart() {
    const rawCart = localStorage.getItem('POKESTATS');
    const cart = JSON.parse(rawCart) || [];

    return cart;
}

export function clearCart() {
    localStorage.removeItem('POKESTATS');
}