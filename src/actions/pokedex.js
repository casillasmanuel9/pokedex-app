
import { typesPokedex } from '../types/types';
import { getPokemonsFetch } from '../helpers/getPokemonsFetch'

/**
 * 
 * @param {number} offset inicio del arreglo paginado 
 * @param {number} limit limite del arreglo paginado
 */
export const getPokemons = (offset, limit) => {
    return (dispatch) => {
        getPokemonsFetch(offset, limit).then(pokemons => {
            dispatch( setPokemons(pokemons) );
        });
    }
}

/**
 * 
 * @param {arreglo de pokemones} pokemons 
 */
export const setPokemons = ( pokemons ) => ({
    type: typesPokedex.setPokemon,
    payload: {
        pokemons
    }
});