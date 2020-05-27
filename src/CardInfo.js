import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo({title, subtitle, link}) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="hn-card-info" style={style}>
            <p className="hn-card-title">{title}</p>
            <p className="hn-card-subtitle">{subtitle}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    )
}

export default CardInfo;