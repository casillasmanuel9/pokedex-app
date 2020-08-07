import React from 'react';
import { Provider } from 'react-redux';

import { HomePage } from './components/Home/HomePage';
import { store } from './store/store';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

export const PokedexApp = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <HomePage />
            </ThemeProvider>
        </Provider>
    )
}
