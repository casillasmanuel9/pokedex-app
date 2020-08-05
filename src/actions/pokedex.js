
import { typesPokedex } from '../types/types';
import { getPokemonsFetch } from '../helpers/getPokemonsFetch'

/**
 * 
 * @param {number} offset inicio del arreglo paginado 
 * @param {number} limit limite del arreglo paginado
 */
export const getPokemons = (offset) => {
    return (dispatch) => {
        dispatch( loadingPokemons() );
        getPokemonsFetch(offset).then(pokemonsResp => {
            const { count, pokemons } = pokemonsResp;
            dispatch( setPokemons( count, pokemons) );
        });
    }
}

/**
 * 
 * @param {arreglo de pokemones} pokemons 
 */
export const setPokemons = ( count, pokemons ) => ({
    type: typesPokedex.setPokemon,
    payload: {
        count,
        pokemons
    }
});

const loadingPokemons = ( ) => ({
    type: typesPokedex.loadingPokemons
});