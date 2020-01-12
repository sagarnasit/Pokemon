import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParam from './searchPramas';
import Details from './Details';
import Logo from './Logo';

const App = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        const getPokemons = async () => {

            let result;
            const media = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
            if (localStorage.getItem('pokemon') == null) {
                result = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1000`).then((data) => data.json());
                localStorage.setItem('pokemon', JSON.stringify(result));
            } else {
                result = JSON.parse(localStorage.getItem('pokemon'))
            }
            let allPokemons = [];
            result.results.map((pokemon, i) => {
                const { name, url } = pokemon;
                allPokemons[name] = { name, url, media: `${media}${i + 1}.png` };
            });

            setPokemons(allPokemons);
        }
        getPokemons();
    }, [])

    return (
        <>
            <Logo />
            <Router>
                <SearchParam pokemons={pokemons} path="/" />
                <Details path="/details/:name" />
            </Router>
        </>
    );
};

render(<App />, document.getElementById("root"));
