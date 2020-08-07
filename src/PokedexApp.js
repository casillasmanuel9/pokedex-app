import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { HomePage } from './pages/Home/HomePage';

export const PokedexApp = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <HomePage />
            </ThemeProvider>
        </Provider>
    )
}
