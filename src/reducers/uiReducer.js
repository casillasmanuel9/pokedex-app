import { typesPokedex } from "../types/types";

const initialState = {
    loading: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesPokedex.startLoading: 
            return {
                loading: true
            }
        case typesPokedex.finishLoading:
            return {
                loading: false
            }
        default:
            return state;
    }
}