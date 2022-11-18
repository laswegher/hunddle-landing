import React from 'react';
import Card from './Card';
import content from '../content';

const Cards = () => {
    // console.log(content);
    const contentJSX = content.map((el) => {
        return (
            <Card
                key={el.id}
                {...el}
            />
        );
    });
    return <div>{contentJSX}</div>;
};

export default Cards;
