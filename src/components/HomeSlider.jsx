/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import person1 from '../images/home/person1.png';
import person2 from '../images/home/person2.png';
import person3 from '../images/home/person3.png';
import styles from '../styles/HomeSlider.module.css';
import SliderCard from './SliderCard';
function HomeSlider() {
  const [actual, setActual] = useState(1);

  useEffect(() => {
    // const interval = setInterval(function() {
    //   setActual((previous) => {
    //     if (previous === 2) {
    //       return 0;
    //     }
    //     return previous + 1;
    //   })
    // }, 7000);
    // return () => {
    //   clearInterval(interval)
    // }
  }, []);

  const next = () => {
    if (actual > 1) {
      setActual(0);
    } else {
      setActual(actual + 1);
    }
  };

  const previous = () => {
    if (actual < 1) {
      setActual(2);
    } else {
      setActual(actual - 1);
    }
  };

  const stringfyNumber = (number) => {
    if (number === 0) {
      return styles.first;
    } else if (number === 1) {
      return styles.second;
    }
    return styles.third;
  };

  return (
    <>
      <i
        className={`bi bi-chevron-left ${styles.chevron} ${styles.previous}`}
        onClick={previous}
      />
      <div className={`${styles.slider} ${stringfyNumber(actual)}`}>
        <SliderCard
          img={person1}
          position={styles.firstSlide}
          title='Viaje com segurança!'
          text='Temos um sistema de rastreamento exclusivo que te garante segurança durante as viagens. Sua localização em tempo real pode ser compartilhada através de um Link.'
        />
        <SliderCard
          img={person2}
          position={styles.secondSlide}
          title='Indique motoristas!'
          text='Você conhece algum motorista de aplicativo? Você pode enviar para ele o Link de download do app de motoristas e receber bonificações por ter feito a indicação!'
        />
        <SliderCard
          img={person3}
          position={styles.thirdSlide}
          title='Saiba mais sobre a Lev!'
          text='Conheça toda a nossa história, de onde surgiu a ideia, como foi nosso começo e como nos tornamos
          o que somos hoje.'
        />
      </div>
      <i
        className={`bi bi-chevron-left ${styles.chevron} ${styles.next}`}
        onClick={next}
      />
    </>
  );
}

export default HomeSlider;
