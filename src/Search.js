import React, { useState } from "react";

import { navigate } from '@reach/router'

const Search = () => {

    const [search, setSearch] = useState('');

    const searchHandler = async (e) => {
        e.preventDefault();
        navigate(`/details/${search}`);
    }

    return (
        <form name="search" onSubmit={searchHandler} className="search-form" >
            <input
                id='search'
                name='search'
                placeholder="Search Pokemon"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onBlur={e => setSearch(e.target.value)}
            />
            <button className="searchButton" type="submit">Search</button>
        </form>
    );
}

export default Search;