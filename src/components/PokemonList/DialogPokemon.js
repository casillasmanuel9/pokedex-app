import React, { useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, Grid, Button, DialogActions, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { setPoekmonDeasactivate } from '../../actions/pokemons';

export const DialogPokemon = ({open, handleClose}) => {

    const dispatch = useDispatch();
    const { name, height, weight, types, abilities, sprites } = useSelector(state => state.pokemons.pokemonActive)

    useEffect(() => {
        return () => {
            dispatch(setPoekmonDeasactivate());
        }
    }, [dispatch])

    return (
        <>
            <Dialog onClose={handleClose} open={open} maxWidth='xs'>
                <DialogTitle onClose={handleClose} style={{ textTransform: 'capitalize' }}>
                    { name }
                </DialogTitle>
                <DialogContent>
                    <Grid style={{ margin: '0px' }} container spacing={3} alignItems='center' justify='space-evenly'>
                        <Grid item xs={4} md={4} lg={4}>
                            <img alt={name}
                                className='animate__animated animate__fadeInLeft animate__slow'
                                src={(sprites.front_default) ? sprites.front_default : './assets/no_image.png'} />
                        </Grid>
                        <Grid style={{ margin: '0px' }} item xs={7} md={7} lg={7} sm container direction='column' spacing={2}>
                            <Grid item container direction='row' spacing={3}>
                                <Grid item>
                                    <Typography variant="body2" gutterBottom>
                                        Altura
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {height} ft
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" gutterBottom>
                                        Peso
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {weight} lb
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
                                            abilities.map(({ ability }) => (
                                                <span key={`${name}-${ability.name}`}>
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
                                            types.map(({ type }) => (
                                                <span key={`${name}-${type.name}`}>
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
                    <Button onClick={handleClose} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
