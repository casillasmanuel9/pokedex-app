import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPokemons } from '../../actions/pokedex';
import { useCounter } from '../../hooks/useCounter';

export const HomePage = () => {

    const { counter, increment } = useCounter(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getPokemons( 
                counter, 
                counter + 20)
        );
    }, [counter, dispatch]);

    return (
        <div>
            <h1> Home Page { counter } </h1>
            <button onClick={ increment }> Siguiente </button>
        </div>
    )
}
