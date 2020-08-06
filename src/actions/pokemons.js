
import { typesPokedex } from '../types/types';
import { getPokemonsFetch } from '../helpers/getPokemonsFetch'
import { startLogin, finishLogin } from './ui';

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

export const setPokemons = ( pokemons ) => ({
    type: typesPokedex.setPokemons,
    payload: {
        pokemons
    }
});

export const setCounter = ( count ) => ({
    type: typesPokedex.setCount,
    payload: {
        count
    }
});

export const setPoekmonActive = ( pokemon ) => ({
    type: typesPokedex.setActivePokemon,
    payload: {
        pokemon
    }
});

export const setPoekmonDeasactivate = ( ) => ({
    type: typesPokedex.setDesactivatePokemon
});