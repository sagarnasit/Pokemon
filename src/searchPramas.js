import React, { useState, useEffect, useContext } from "react";
import useDropdown from "./useDropdown";
import Results from './Result';

export default function SearchParams({ api, pokemons }) {


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

        if (null !== api) {
            const pokemonsTypes = async () => {
                let pokeTypes = await api.getTypesList({ offset: 0, limit: 20 });

                setTypes(pokeTypes.results.map(type => type.name));
            }

            pokemonsTypes();
        }
    }, [api])

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
