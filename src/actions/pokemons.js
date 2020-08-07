
import { typesPokedex } from '../types/types';
import { getPokemonsFetch } from '../helpers/getPokemonsFetch'
import { startLogin, finishLogin } from './ui';

/**
 * Midleware encargado de obtener los pokemones
 * @param {number} offset 
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
 * Función encargada de establecer los pokemones obtenidos
 * @param {array} pokemons 
 */
export const setPokemons = ( pokemons ) => ({
    type: typesPokedex.setPokemons,
    payload: {
        pokemons
    }
});

/**
 * Funcion encargada de establecer el numero total de pokemones
 * @param {number} count 
 */
export const setCounter = ( count ) => ({
    type: typesPokedex.setCount,
    payload: {
        count
    }
});

/**
 * Estable el pokemon, a desplegar dentro del dialog
 * @param {object} pokemon 
 */
export const setPoekmonActive = ( pokemon ) => ({
    type: typesPokedex.setActivePokemon,
    payload: {
        pokemon
    }
});

/**
 * Establece que se ha dejado de seleccionar un pokemon
 */
export const setPoekmonDeasactivate = ( ) => ({
    type: typesPokedex.setDesactivatePokemon
});