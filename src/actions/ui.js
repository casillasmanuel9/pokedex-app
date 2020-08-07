import { typesPokedex } from "../types/types";

/**
 * Establece el valor de login en true, 
 * para que se muerstre el circular progress
 */
export const startLogin = ( ) => ({
    type: typesPokedex.startLoading
});

/**
 * Establece el valor de login en false, 
 * para que se oculte
 */
export const finishLogin = ( ) => ({
    type: typesPokedex.finishLoading
});
