import React from 'react';
import { Provider } from 'react-redux';

import { HomePage } from './components/Home/HomePage';
import { store } from './store/store';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export const PokedexApp = () => {
    const theme = createMuiTheme({
        palette: {
            primary: {
                // light: will be calculated from palette.primary.main,
                main: '#ff1f1f',
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
                light: '#0066ff',
                main: '#0044ff',
                // dark: will be calculated from palette.secondary.main,
                contrastText: '#ffcc00',
            },
            // Used by `getContrastText()` to maximize the contrast between
            // the background and the text.
            tonalOffset: 0.2,
        },
    });
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <HomePage />
            </ThemeProvider>
        </Provider>
    )
}
