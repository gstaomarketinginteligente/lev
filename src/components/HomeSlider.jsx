import Slider from 'infinite-react-carousel/lib/carousel/slider';
import React, { useEffect, useState } from 'react';
import person1 from '../images/home/1.png';
import person2 from '../images/home/2.png';
import person3 from '../images/home/3.png';
import styles from '../styles/HomeSlider.module.css';
import SliderCard from './SliderCard';

function HomeSlider() {
  const { container } = styles;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', () => {
      checkIsMobile();
    });
  }, []);

  const checkIsMobile = () => {
    if (window.innerWidth <= 764) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <Slider
      centerMode
      initialSlide={1}
      className={container}
      arrows={!isMobile}
      shift={50}
      centerPadding={30}
    >
      {[
        <SliderCard
          key={person1}
          img={person1}
          title='Viaje com segurança!'
          text='Temos um sistema de rastreamento exclusivo que te garante segurança durante as viagens. Sua localização em tempo real pode ser compartilhada através de um Link.'
        />,
        <SliderCard
          key={person2}
          img={person2}
          title='Indique motoristas!'
          text='Você conhece algum motorista de aplicativo? Você pode enviar para ele o Link de download do app de motoristas e receber bonificações por ter feito a indicação!'
        />,
        <SliderCard
          key={person3}
          img={person3}
          title='Saiba mais sobre a Lev!'
          text='Conheça toda a nossa história, de onde surgiu a ideia, como foi nosso começo e como nos tornamos
            o que somos hoje.'
        />,
      ]}
    </Slider>
  );
}

export default HomeSlider;
