import React, { useState, useEffect } from "react";
import Carousel from './Carousel';
import Search from './Search';

const Details = ({ name }) => {

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const getDetails = async () => {

            try {
                const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) => data.json());
            } catch (e) {
                console.log(e);

            }
            console.log(result);

            setLoading(false)
            setDetail(result);

        }
        getDetails();
    }, [name]);


    if (loading) {
        return <h1>Loading...</h1>;
    } else {

        return (
            <div className="details">
                <Search />
                <h1>{detail.name && detail.name.toUpperCase()}</h1>
                {detail.sprites !== undefined ? <Carousel media={detail.sprites} /> : ""}

                <div className="flex">
                    <div>
                        <span className="label">Weight: </span><span className="weight">{detail.weight}</span>
                    </div>
                    <div>
                        <span className="label">Height: </span><span className="height">{detail.height}</span>
                    </div>
                </div>

                <div className="abilities">
                    <h2>Abilities</h2>
                    {detail.abilities && detail.abilities.map((ability, i) => (
                        <p key={i}>{ability.ability.name}</p>
                    ))}
                </div>
                {detail.moves && <h2>Number of Moves: {detail.moves.length}</h2>}
            </div>

        )
    }

}

export default Details;