import React, { useEffect, useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Actiones
import { getPokemons } from '../../actions/pokedex';
// Material UI
import { Container, Grid, CircularProgress, Typography, Button } from '@material-ui/core';
// Componente
import { AppBarComponent } from '../AppBar/AppBarComponent';
import { PokemonList } from '../PokemonList/PokemonList';
// Hooks
import { useForm } from '../../hooks/useForm';
import { useCounter } from '../../hooks/useCounter';

export const HomePage = () => {

    const { pokemons, loading, count: limit } = useSelector(state => state.pokedex);
    const { counter, increment, decrement } = useCounter(0);
    const [formValues, handleInputChange, reset] = useForm({
        search: ''
    });
    const { search } = formValues;
    const [pokemonsFilter, setPokemonsFilter] = useState(pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        if (pokemons) setPokemonsFilter(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())))
    }, [search, pokemons]);

    useEffect(() => {
        dispatch(getPokemons(counter));
    }, [counter, dispatch]);


    const handleIncrement = () => {
        increment();
        reset();
    }

    const handleDecrement = () => {
        decrement();
        reset();
    }

    return (
        <>
            <AppBarComponent search={search} handleInputChange={handleInputChange} />
            <div>
                <Container maxWidth="md" className='container'>
                    <Grid container spacing={3} direction='row' justify="space-between" alignItems="center">
                        <Grid item>
                            <Button color="secondary" onClick={handleDecrement} disabled={counter === 0 || loading === true}> BACK </Button>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="textSecondary">
                                {(counter > 0) ? counter / 20 + 1 : 1} / {Math.trunc(limit / 20) + 1}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button color="secondary" onClick={handleIncrement} disabled={counter + 20 > limit || loading === true}> NEXT </Button>
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
