import React, { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actiones
import { getPokemons } from "../../actions/pokemons";
// Material UI
import { Container } from "@material-ui/core";
// Componente
import { AppBarComponent } from "./AppBar";
import { PokemonList } from "../PokemonList/PokemonList";
// Hooks
import { useForm } from "../../hooks/useForm";
import { useCounter } from "../../hooks/useCounter";
import { GridLoading } from "../Loading/GridLoading";
import { Controls } from "./Controls";

export const HomePage = () => {
    // Store
    const { pokemons, count: limit } = useSelector((state) => state.pokemons);
    const { loading } = useSelector((state) => state.ui);

    // Dispatch react-redux
    const dispatch = useDispatch();

    // Custom Hooks
    const { counter, increment, decrement } = useCounter(0);
    const [formValues, handleInputChange, reset] = useForm({
        search: "",
    });
    const { search } = formValues;

    // Filtro
    const [pokemonsFilter, setPokemonsFilter] = useState(pokemons);

    useEffect(() => {
        if (pokemons)
            setPokemonsFilter(
                pokemons.filter((pokemon) =>
                    pokemon.name.toLowerCase().includes(search.trim().toLowerCase())
                )
            );
    }, [search, pokemons]);

    useEffect(() => {
        dispatch(getPokemons(counter));
    }, [counter, dispatch]);

    const handleIncrement = () => {
        increment();
        reset();
    };

    const handleDecrement = () => {
        decrement();
        reset();
    };

    return (
        <>
            <AppBarComponent search={search} handleInputChange={handleInputChange} />
            <div>
                <Container maxWidth="md" className="container">
                    <Controls
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                        counter={counter}
                        limit={limit}
                        loading={loading}
                    />
                    {pokemonsFilter && loading === false && (
                        <PokemonList pokemons={pokemonsFilter} />
                    )}
                    {loading === true && <GridLoading />}
                </Container>
            </div>
        </>
    );
};
