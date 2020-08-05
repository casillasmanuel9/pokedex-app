import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemons } from '../../actions/pokedex';
import { useCounter } from '../../hooks/useCounter';

import Button from "@material-ui/core/Button";

import { AppBarComponent } from '../AppBar/AppBarComponent';
import { Container, Grid, makeStyles, CircularProgress } from '@material-ui/core';
import { PokemonList } from '../PokemonList/PokemonList';
import { useForm } from '../../hooks/useForm';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}));

export const HomePage = () => {

    const { pokemons, loading, count: limit } = useSelector(state => state.pokedex);

    const [formValues, handleInputChange] = useForm({
        search: ''
    });

    const [pokemonsFilter, setPokemonsFilter] = useState(pokemons);

    const { search } = formValues;

    useEffect(() => {
        if (pokemons) setPokemonsFilter(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())))
    }, [search, pokemons]);

    const { counter, increment, decrement } = useCounter(0);

    const dispatch = useDispatch();

    const classes = useStyles();


    useEffect(() => {
        dispatch(
            getPokemons(
                counter)
        );
    }, [counter, dispatch]);

    return (
        <>
            <AppBarComponent handleInputChange={handleInputChange} />
            <div className={classes.root}>
                <Container maxWidth="md" className='container'>
                    <Grid container spacing={3} direction='row' justify="space-between" alignItems="center">
                        <Grid item>
                            <Button color="secondary" onClick={decrement} disabled={counter === 0}> BACK </Button>
                        </Grid>
                        <Grid item>
                            <Button color="secondary" onClick={increment} disabled={counter + 20 > limit}> NEXT </Button>
                        </Grid>
                    </Grid>
                    {
                        (pokemonsFilter && loading === false) && <PokemonList pokemons={pokemonsFilter} />
                    }
                    {
                        loading === true &&

                        <Grid container spacing={3} direction='row' justify="center" alignItems="center" >
                            <Grid item>
                                <CircularProgress color='secondary' />
                            </Grid>
                        </Grid>

                    }
                </Container>
            </div>
        </>
    )
}
