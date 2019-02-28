import React from 'react';
import CardText from './CardText';
import CardBanner from './CardBanner';

import './Card.css';

const CardContainer = () => {
  return (
    <div className = "card-container">
      <CardBanner />
      <CardText />

    </div>

  )

};

export default CardContainer;