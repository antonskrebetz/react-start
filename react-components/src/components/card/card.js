import React from 'react';
import './card.scss';

const Card = () => {
    return (
        <li className="card">
            <img className="card_img" src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/detail_9b31eaf4376cdff03e0ba1bcaa826a01.jpg"/>
            <div className="card_title">Forest folks</div>
            <div className="card_author">Anton Skrebetz</div>
            <div className="card_category">Art</div>
            <div className="card_views">views: 565</div>
        </li>
    )
}

export default Card;