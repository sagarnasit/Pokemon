import React, { useState, useEffect, useContext } from "react";
import useDropdown from "./useDropdown";
import Results from './Result';

export default function SearchParams({ pokemons }) {


    const [types, setTypes] = useState([]);
    const [result, setResult] = useState(pokemons);
    const [type, TypesDropDown, setType] = useDropdown('Type', 'normal', types);

    async function requestPets() {

        if ('' != type) {
            const typeResult = await fetch(`https://pokeapi.co/api/v2/type/${type}`).then((data) => data.json());
            const res = typeResult.pokemon.map(pokemon => pokemons[`${pokemon.pokemon.name}`]);

            // console.log(pokemons['pidgeot']);
            setResult(res);

        }


    }

    useEffect(() => {

        const pokemonsTypes = async () => {

            const result = await fetch(`https://pokeapi.co/api/v2/type`).then((data) => data.json());

            setTypes(result.results.map(type => type.name));

        }

        pokemonsTypes();

    }, [])

    return (
        <div className="search-params">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    requestPets();
                }}
            >

                <TypesDropDown />
                <button >Submit</button>
            </form>
            <Results pokemons={result} />
        </div>
    );
}
