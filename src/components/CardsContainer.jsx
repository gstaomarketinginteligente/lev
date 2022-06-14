import React from 'react';
import BenefitsCard from './BenefitsCard';
import styles from '../styles/CardsContainer.module.css';
import { Slider } from 'infinite-react-carousel/lib';

function CardsContainer({ cards, className, isMobile }) {
  const { container } = styles;

  return isMobile ? (
    <Slider
      centerMode
      initialSlide={1}
      className={container}
      arrows={!isMobile}
      shift={30}
      centerPadding={50}
    >
      {cards.map(({ icon, title, text }) => (
        <BenefitsCard key={title} img={icon} title={title} text={text} />
      ))}
    </Slider>
  ) : (
    <div className={isMobile ? container : className}>
      {cards.map(({ icon, title, text }) => (
        <BenefitsCard key={title} img={icon} title={title} text={text} />
      ))}
    </div>
  );
}

export default CardsContainer;
