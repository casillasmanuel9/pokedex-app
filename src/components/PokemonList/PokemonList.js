import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { PokemonListItem } from './PokemonListItem';
import { DialogPokemon } from './DialogPokemon';
import { useDispatch } from 'react-redux';
import { setPoekmonActive } from '../../actions/pokemons';

export const PokemonList = ({pokemons}) => {
    
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const handleOpenPokemon = ( pokemon ) => {
        dispatch(setPoekmonActive(pokemon));
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

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
                open === true && <DialogPokemon open={open} handleClose={handleClose} />
            }
        </>
    )
}
