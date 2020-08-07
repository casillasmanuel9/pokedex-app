import React from 'react';

import { Grid, CardContent, Card, Typography, CardMedia, CardActionArea } from '@material-ui/core';

export const PokemonListItem = ({ pokemon, handleOpenPokemon }) => {
    return (
        <>
            <Grid item xs={4} md={2} lg={2} className='animate__animated animate__fadeIn animate__fast'>
                <Card>
                    <CardActionArea onClick={() => handleOpenPokemon(pokemon)}>
                        <CardMedia
                            component="img"
                            alt={pokemon.name}
                            src={(pokemon.sprites.front_default) ? pokemon.sprites.front_default : './assets/icons/no_image.png'}
                        />
                        <CardContent>
                            <Typography variant="subtitle1" component="h2" noWrap style={{ textTransform: 'capitalize' }}> {pokemon.name} </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    )
}
