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
            const media = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
            const result = await api.getPokemonsList({
                limit: 1000,
                offset: 0
            });
            let poks = [];
            result.results.map((pokemon, i) => {
                const { name, url } = pokemon;
                poks[name] = { name, url, media: `${media}${i + 1}.png` };
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
