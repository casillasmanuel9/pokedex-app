import { typesPokedex } from "../types/types";

export const pokedexReducer = (state = [{}], action) => {
    switch (action.type) {
        case typesPokedex.setPokemon:
            return action.payload
        default:
            return state;
    }
}