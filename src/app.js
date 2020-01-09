import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import SearchParam from './searchPramas';
import { Pokedex } from "pokeapi-js-wrapper";
const App = () => {

    const [API, setAPI] = useState(null);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const api = new Pokedex();
        setAPI(api);

        const getPokemons = async () => {
            const result = await api.getPokemonsList({
                limit: 963,
                offset: 0
            });
            let poks = [];
            result.results.map((pokemon, i) => {
                poks[i] = pokemon;
            });

            setPokemons(poks);
        }
        getPokemons();
    }, [])

    return (
        <>
            <div>Hello World!</div>
            <SearchParam api={API} pokemons={pokemons} />
        </>
    );
};

render(<App />, document.getElementById("root"));
