import React from 'react';
import { Provider } from 'react-redux';

import { HomePage } from './components/Home/HomePage';
import { store } from './store/store';

export const PokedexApp = () => {
    return (
        <Provider store={ store }>
            <HomePage />
        </Provider>
    )
}
