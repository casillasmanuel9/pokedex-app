
import { typesPokedex } from '../types/types';
import { getPokemonsFetch } from '../helpers/getPokemonsFetch'
import { startLogin, finishLogin } from './ui';

/**
 * MIDLEWARE
 * @param {*} offset 
 */
export const getPokemons = (offset) => {
    return (dispatch) => {
        dispatch( startLogin() );
        getPokemonsFetch(offset).then(pokemonsResp => {
            const { count, pokemons } = pokemonsResp;
            dispatch( setPokemons( pokemons) );
            dispatch( setCounter( count ) );
            dispatch( finishLogin() );
        });
    }
}

/**
 * ACTION
 * @param {arreglo de pokemones} pokemons 
 */
export const setPokemons = ( pokemons ) => ({
    type: typesPokedex.setPokemons,
    payload: {
        pokemons
    }
});

/**
 * ACTION
 * @param {arreglo de pokemones} pokemons 
 */
export const setCounter = ( count ) => ({
    type: typesPokedex.setCount,
    payload: {
        count
    }
});