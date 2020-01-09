import React, { useState, useEffect, useContext } from "react";
import useDropdown from "./useDropdown";

export default function SearchParams({ api, pokemons }) {


    const [types, setTypes] = useState([]);
    const [type, TypesDropDown, setType] = useDropdown('Type', 'normal', types);

    async function requestPets() {

        console.log(type);


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
        </div>
    );
}
