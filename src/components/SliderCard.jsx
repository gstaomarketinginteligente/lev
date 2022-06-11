import React from 'react';
import styles from '../styles/SliderCard.module.css';

function SliderCard(props) {
  const { container, imgBox } = styles;
  const { img, title, text } = props;

  const style = {
    backgroundImage: `url(${img})`,
  }

  return (
    <div className={`card ${container}`}>
      <img src={img} alt='person' />
      {/* <div className={imgBox} style={style}>
      </div> */}
      <article>
        <h1>{title}</h1>
        <p>{text}</p>
      </article>
    </div>
  );
}

export default SliderCard;
