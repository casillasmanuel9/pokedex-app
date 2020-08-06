import { typesPokedex } from "../types/types";

export const startLogin = ( ) => ({
    type: typesPokedex.startLoading
});

export const finishLogin = ( ) => ({
    type: typesPokedex.finishLoading
});
