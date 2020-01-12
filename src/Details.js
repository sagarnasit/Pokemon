import React, { useState, useEffect } from "react";
import Result from './Result';
import Search from './Search';
import ErrorBoundary from "./ErrorBoundary";

const Details = ({ name }) => {

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const getDetails = async () => {

            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data) => data.json()).catch((e) => ({ notFound: true, name: name }));

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
                <Result detail={detail} />
            </div>
        )
    }

}

export default function DetailsWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
}
