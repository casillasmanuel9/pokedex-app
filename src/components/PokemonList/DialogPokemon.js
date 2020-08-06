import React from 'react'
import { Dialog, DialogTitle, DialogContent, Grid, Button, DialogActions, Typography } from '@material-ui/core';

export const DialogPokemon = ({ open, handleClose, pokemon }) => {

    return (
        <>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle onClose={handleClose} style={{ textTransform: 'capitalize' }}>
                    {pokemon.name}
                </DialogTitle>
                <DialogContent>
                    <Grid style={{ margin: '0px' }} container spacing={3} alignItems='center' justify='space-evenly'>
                        <Grid item xs={4} md={4} lg={4}>
                            <img alt={pokemon.name}
                                className='animate__animated animate__fadeInLeft animate__slow'
                                src={(pokemon.sprites.front_default) ? pokemon.sprites.front_default : './assets/no_image.png'} />
                        </Grid>
                        <Grid style={{ margin: '0px' }} item xs={7} md={7} lg={7} sm container direction='column' spacing={2}>
                            <Grid item container direction='row' spacing={3}>
                                <Grid item>
                                    <Typography variant="body2" gutterBottom>
                                        Altura
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {pokemon.height} ft
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" gutterBottom>
                                        Peso
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {pokemon.weight} lb
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container direction='row'>
                                <Grid item>
                                    <Typography variant="body2" gutterBottom>
                                        Habilidades
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" style={{ textTransform: 'capitalize' }}>
                                        {
                                            pokemon.abilities.map(({ ability }) => (
                                                <span key={`${pokemon.name}-${ability.name}`}>
                                                    {`${ability.name} `}
                                                </span>
                                            ))
                                        }
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item container direction='row'>
                                <Grid item>
                                    <Typography variant="body2" gutterBottom>
                                        Tipo
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" style={{ textTransform: 'capitalize' }}>
                                        {
                                            pokemon.types.map(({ type }) => (
                                                <span key={`${pokemon.name}-${type.name}`}>
                                                    {`${type.name} `}
                                                </span>
                                            ))
                                        }
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
