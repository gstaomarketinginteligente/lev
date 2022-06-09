import React from 'react';
import styles from '../styles/SliderCard.module.css';

function SliderCard(props) {
  const { slide } = styles;
  const { img, position, title, text } = props;

  return (
    <div className={`${slide} ${position}`}>
      <div>
        <img src={img} alt='person' />
        <article>
          <h1>{title}</h1>
          <p>{text}</p>
        </article>
      </div>
    </div>
  );
}

export default SliderCard;
