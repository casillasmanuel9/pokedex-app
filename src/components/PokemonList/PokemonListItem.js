import React, { useState } from 'react';

import { Grid, CardContent, Card, Typography, CardMedia, CardActionArea } from '@material-ui/core';
import { DialogPokemon } from './DialogPokemon';

export const PokemonListItem = ({ pokemon }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Grid item xs={4} md={2} lg={2} className='animate__animated animate__fadeIn animate__fast'>
                <Card>
                    <CardActionArea onClick={handleOpen}>
                        <CardMedia
                            component="img"
                            alt={pokemon.name}
                            src={(pokemon.sprites.front_default) ? pokemon.sprites.front_default : './assets/no_image.png'}
                        />
                        <CardContent>
                            <Typography variant="subtitle1" component="h2" noWrap style={{ textTransform: 'capitalize' }}> {pokemon.name} </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            {
                open === true && <DialogPokemon open={open} handleClose={handleClose} pokemon={pokemon} />
            }
        </>
    )
}
