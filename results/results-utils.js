export function mungeCaptured(pokemonArray) {
    const captures = [];
    
    for (let i = 0; i < pokemonArray.length; i++) {
        const pokemon = pokemonArray[i];
        
        captures.push(pokemon.captured);

    }
    
    return captures;

}

export function mungeNames(pokemonArray) {
    const names = [];

    for (let i = 0; i < pokemonArray.length; i++) {
        const pokemon = pokemonArray[i];

        names.push(pokemon.pokemon);
    }
    
    return names;
}
