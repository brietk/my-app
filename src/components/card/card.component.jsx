import React from 'react';
import './card.styles.css';

//þessi kompónent á að hugsa um hvernig á að create a card
//functional component
export const Card = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);