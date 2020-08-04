import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { pokedexReducer } from '../reducers/pokedexReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    pokedex: pokedexReducer
});

export const store = createStore( reducers, 
    composeEnhancers( 
        applyMiddleware( thunk ) 
    )
);