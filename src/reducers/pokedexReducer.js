import { typesPokedex } from "../types/types";

const initialState = {
    loading: false,
    pokemons: null,
    count: 0
}

export const pokedexReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesPokedex.setPokemon:
            return {
                loading: false,
                pokemons: action.payload.pokemons,
                count: action.payload.count
            }
        case typesPokedex.loadingPokemons: 
            return {
                ...state,
                loading: true,
                pokemons: null,
            }
        default:
            return state;
    }
}