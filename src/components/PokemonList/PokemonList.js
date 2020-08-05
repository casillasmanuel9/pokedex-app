import React from 'react';
import { Grid } from '@material-ui/core';
import { PokemonListItem } from '../PokemonListItem/PokemonListItem';

export const PokemonList = ({pokemons}) => {
    return (
        <>
            <Grid container direction='row' justify="center" alignItems="center" spacing={3} >
                {
                    pokemons.map(pokemon => (
                        <PokemonListItem key={pokemon.name} pokemon={pokemon} />
                    ))
                }
            </Grid>
        </>
    )
}
