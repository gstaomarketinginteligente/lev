import React, { useEffect, useState } from 'react'
import styles from '../styles/Carousel.module.css';
import Slider from 'infinite-react-carousel';
function Carousel({ cards }) {
  const [,updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const {
    container,
    cardsContainer,
    arrow,
  } = styles;

  const nextCard = () => {
    const firstCard = cards.shift();
    cards.push(firstCard);
    forceUpdate();
  }

  const previousCard = () => {
    const lastCard = cards.pop();
    cards.unshift(lastCard);
    forceUpdate();
  }

  useEffect(() => {
    // cards[0].props.class = 'a';
  }, [cards]);

  return (
    <Slider
      centerMode
      initialSlide={1}
      className={container}
    >
      {cards}
    </Slider>
  )
}

export default Carousel