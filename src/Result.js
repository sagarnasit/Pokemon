import React from "react";
import Pet from "./Pet";

const Results = ({ pokemons }) => {
    return (
        <div className="search">
            {pokemons.length === 0 ? (
                <h1>No pokemons Found</h1>
            ) : (
                    pokemons.map(pokemon => (
                        <Pet
                            key={pokemon.name}
                            name={pokemon.name.toUpperCase()}
                            media={pokemon.media}
                        />
                    ))
                )}
        </div>
    );
};

export default Results;
