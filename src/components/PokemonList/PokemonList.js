import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { PokemonListItem } from './PokemonListItem';
import { PokemonDialog } from './PokemonDialog';
import { useDispatch } from 'react-redux';
import { setPoekmonActive } from '../../actions/pokemons';

export const PokemonList = ({pokemons}) => {
    
    // Dialog open state
    const [openDialog, setOpenDialog] = useState(false);
    // Dispatch
    const dispatch = useDispatch();

    const handleOpenPokemon = ( pokemon ) => {
        dispatch(setPoekmonActive(pokemon));
        setOpenDialog(true);
    }

    const handleClose = () => setOpenDialog(false);

    return (
        <>
            <Grid container direction='row' justify="center" alignItems="center" spacing={3} >
                {
                    pokemons.map(pokemon => (
                        <PokemonListItem key={pokemon.name} pokemon={pokemon} handleOpenPokemon={handleOpenPokemon}/>
                    ))
                }
            </Grid>
            {
                openDialog === true && <PokemonDialog open={openDialog} handleClose={handleClose} />
            }
        </>
    )
}
