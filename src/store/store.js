import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { pokemonsReducer } from '../reducers/pokemonsReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    pokemons: pokemonsReducer,
    ui: uiReducer
});

export const store = createStore( reducers, 
    composeEnhancers( 
        applyMiddleware( thunk ) 
    )
);