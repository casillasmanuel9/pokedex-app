import { typesPokedex } from "../types/types";

const initialState = {
    pokemons: null,
    count: 0
}

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesPokedex.setPokemons:
            return {
                ...state,
                pokemons: action.payload.pokemons
            }
        case typesPokedex.setCount:
            return {
                ...state,
                count: action.payload.count
            }
        default:
            return state;
    }
}