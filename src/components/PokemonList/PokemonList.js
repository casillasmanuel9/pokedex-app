import React from 'react'
import { PokemonListItem } from '../PokemonListItem/PokemonListItem'
import { Grid } from '@material-ui/core';

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
