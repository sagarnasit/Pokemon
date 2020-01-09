/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "@reach/router";

export default function Pet({ name, media }) {
    let hero = "http://placecorgi.com/300/300";

    return (
        <Link to={`/details/${name}`} className="pet">
            <div className="image-container">
                <img src={media ? media : hero} alt={name} />
            </div>
            <div className="info">
                <h1>{name}</h1>
            </div>
        </Link>
    );
}
