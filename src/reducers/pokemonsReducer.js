import { typesPokedex } from "../types/types";

const initialState = {
    pokemons: [], // Array de pokemones
    pokemonActive: null, // Pokemon seleccionado
    count: 0 // Total de pokemones
}

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesPokedex.setPokemons:
            return {
                ...state,
                pokemons: [...action.payload.pokemons]
            }
        case typesPokedex.setCount:
            return {
                ...state,
                count: action.payload.count
            }

        case typesPokedex.setActivePokemon:
            return {
                ...state,
                pokemonActive: action.payload.pokemon
            }

        case typesPokedex.setDesactivatePokemon:
            return {
                ...state,
                pokemonActive: null
            }
        default:
            return state;
    }
}