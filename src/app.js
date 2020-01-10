import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParam from './searchPramas';
import Details from './Details';

const App = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        const getPokemons = async () => {
            const media = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1000`).then((data) => data.json());
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
            <Router>
                <SearchParam pokemons={pokemons} path="/" />
                <Details path="/details/:name" />
            </Router>
        </>
    );
};

render(<App />, document.getElementById("root"));
