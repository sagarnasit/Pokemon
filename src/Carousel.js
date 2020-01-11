import React from "react";

class Carousel extends React.Component {

    render() {
        const { front_default, front_shiny, back_default, back_shiny } = this.props.media;

        return (
            <div className="carousel">
                {/* <img src={photos[active]} alt="animal" /> */}

                <div className="carousel-smaller">

                    {front_default && <img src={front_default} className="active" alt="frontdefault" />}
                    {front_shiny && <img src={front_shiny} className="active" alt="frontshiny" />}
                    {back_default && <img src={back_default} className="active" alt="backDefault" />}
                    {back_shiny && <img src={back_default} className="active" alt="backShiny" />}
                </div>
            </div>
        );
    }
}

export default Carousel;
