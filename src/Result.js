import React from 'react';
import Carousel from './Carousel';

const Result = ({ detail }) => {

    const { name, weight, height, sprites, abilities, moves, notFound = false } = detail;

    if (notFound) {
        return (
            <>
                <h1>Sorry! No Pokemon with name:{name} </h1>
            </>
        )
    } else {
        return (
            <>
                <h1>{name !== undefined ? name.toUpperCase() : ""}</h1>
                {sprites !== undefined ? <Carousel media={sprites} /> : ""}

                <div className="flex">
                    <div>
                        <span className="label">Weight: </span><span className="weight">{weight}</span>
                    </div>
                    <div>
                        <span className="label">Height: </span><span className="height">{height}</span>
                    </div>
                </div>

                <div className="abilities">
                    <h2>Abilities</h2>
                    {abilities && abilities.map((ability, i) => (
                        <p key={i}>{ability.ability.name}</p>
                    ))}
                </div>
                {moves && <h2>{name} can perform <i>{moves.length}</i> diffrent moves.</h2>}
            </>
        );
    }
}

export default Result;