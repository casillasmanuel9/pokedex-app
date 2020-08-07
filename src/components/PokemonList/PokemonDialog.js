import React, { useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, Grid, Button, DialogActions, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { setPoekmonDeasactivate } from '../../actions/pokemons';

export const PokemonDialog = ({ open, handleClose }) => {

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
                <DialogTitle onClose={handleClose} style={{ textTransform: 'capitalize' }}> {name} </DialogTitle>
                <DialogContent>
                    <Grid style={{ margin: '0px' }} container spacing={3} alignItems='center' justify='space-evenly'>

                        <Grid item xs={4} md={5} lg={5}>
                            <img alt={name}
                                style={{ width: '100%' }}
                                className='animate__animated animate__zoomInDown animate__fast'
                                src={(sprites.front_default) ? sprites.front_default : './assets/icons/no_image.png'} />
                        </Grid>

                        <Grid style={{ margin: '0px' }} item xs={8} md={7} lg={7} sm container direction='column' spacing={2}>

                            <Grid item container direction='row' spacing={3}>
                                <Grid item>
                                    <Typography variant="body2" gutterBottom> Altura </Typography>
                                    <Typography variant="body2" color="textSecondary"> {height} ft </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" gutterBottom> Peso </Typography>
                                    <Typography variant="body2" color="textSecondary"> {weight} lb </Typography>
                                </Grid>
                            </Grid>

                            <Grid item container direction='row'>
                                <Grid item>
                                    <Typography variant="body2" gutterBottom> Habilidades </Typography>
                                    {
                                        abilities.map(({ ability }) => (
                                            <Button color='secondary' key={`${name}-${ability.name}`}>
                                                {`${ability.name} `}
                                            </Button>
                                        ))
                                    }
                                </Grid>
                            </Grid>

                            <Grid item container direction='row'>
                                <Grid item>
                                    <Typography variant="body2" gutterBottom>
                                        Tipo
                                    </Typography>
                                    {
                                        types.map(({ type }) => (
                                            <Button color='secondary' key={`${name}-${type.name}`}>
                                                {`${type.name} `}
                                            </Button>
                                        ))
                                    }
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary"> Cerrar </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
