import React from "react";

const Card = (props) => {
    const { image, title, description } = props.cards;
    return (
        <div className="card h-100">
            <img src={"https://picsum.photos/id/"+(Math.floor(Math.random()*900)+100)+"/400/400"} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt={title} />
            <div className="card-body"> 
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <hr style={{ border: '0'}} />
                <button className="btn btn-primary">
                    Find out More!
                </button>
            </div>
        </div>
    );
};

export default Card;