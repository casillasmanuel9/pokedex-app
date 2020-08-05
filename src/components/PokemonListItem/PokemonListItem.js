import React, { useState } from 'react';
import { Grid, CardContent, Card, CardActions, Typography, CardMedia, Button, makeStyles, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    }
}));

export const PokemonListItem = ({ pokemon }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const classes = useStyles();

    return (
        <>
            <Grid item xs={4} md={3} lg={2} className='animate__animated animate__fadeIn animate__fast'>
                <Card className={classes.root}>
                    <CardMedia
                        component="img"
                        alt={pokemon.name}
                        src={(pokemon.sprites.front_default) ? pokemon.sprites.front_default : './assets/no_image.png'}
                    />
                    <CardContent>
                        <Typography variant="subtitle1" component="h2" noWrap style={{ textTransform: 'capitalize' }}> {pokemon.name} </Typography>
                    </CardContent>
                    <CardActions>
                        <Button color="secondary" size="small" onClick={handleOpen}> Ver más.. </Button>
                    </CardActions>
                </Card>


                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle onClose={handleClose} style={{ textTransform: 'capitalize' }}>
                        {pokemon.name}
                    </DialogTitle>
                    <DialogContent>
                        <Grid style={{margin: '0px'}} container spacing={3} alignItems='center' justify='center'>
                            <Grid item>
                                <img alt={pokemon.name}
                                width="200"
                                    src={(pokemon.sprites.other.dream_world.front_default) ? pokemon.sprites.other.dream_world.front_default : './assets/no_image.png'} />
                            </Grid>
                            <Grid item >
                                <Grid container direction='column' spacing={2}>
                                    <Grid item>
                                        <Grid container direction='row' spacing={3}>
                                            <Grid item>
                                                <Grid container direction='column'>
                                                    <Grid item>
                                                        <Typography variant="subtitle1" fontWeight="fontWeightBold" noWrap style={{ textAlign: 'center' }}> Altura </Typography>
                                                    </Grid>
                                                    <Grid item style={{padding: '4px 5px'}}>
                                                        <Typography variant="subtitle1" noWrap>{pokemon.height} ft</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item>
                                                <Grid container direction='column'>
                                                    <Grid item>
                                                        <Typography variant="subtitle1" fontWeight="fontWeightBold" noWrap> Peso </Typography>
                                                    </Grid>
                                                    <Grid item style={{padding: '4px 5px'}}>
                                                        <Typography variant="subtitle1" noWrap>{pokemon.weight} lb</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction='row' spacing={3}>
                                            <Grid item>
                                                <Grid container direction='column'>
                                                    <Grid item>
                                                        <Typography variant="subtitle1" fontWeight="fontWeightBold" noWrap> Tipo </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Grid container direction='row' spacing={0}>
                                                            {
                                                                pokemon.types.map(({ type, slot }) => (
                                                                    <Grid key={`${pokemon.name}-${slot}-${type}`} item>
                                                                        <Button size="small" color="secondary">
                                                                            {type.name}
                                                                        </Button>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction='row' spacing={3}>
                                            <Grid item>
                                                <Grid container direction='column'>
                                                    <Grid item>
                                                        <Typography variant="subtitle1" fontWeight="fontWeightBold" noWrap> Habilidades </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Grid container direction='row' spacing={0}>
                                                            {
                                                                pokemon.abilities.map(({ ability, slot }) => (
                                                                    <Grid key={`${pokemon.name}-${slot}-${ability}`} item>
                                                                        <Button size="small" color="secondary">
                                                                            {ability.name}
                                                                        </Button>
                                                                    </Grid>
                                                                ))
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="outlined" color="secondary">
                            Cerrar
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </>
    )
}
