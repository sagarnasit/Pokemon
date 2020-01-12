import React from 'react';
import logo from '../images/pokemon.png';

const Logo = () => {

    return (
        <div className="logo">
            <img src={logo} alt="Pokemon" />
        </div>
    )
}

export default Logo;