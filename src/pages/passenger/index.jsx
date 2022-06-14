import React, { useEffect, useState } from 'react';
import styles from '../../styles/Passenger.module.css';
import car from '../../images/passenger/car.png';
import googleplay from '../../images/googleplay-filled.svg';
import appstore from '../../images/appstore-filled.svg';
import vLev from '../../images/passenger/cards-icons/vLev.svg';
import { benefits } from '../../data/benefits';
import CardsContainer from '../../components/CardsContainer';

function Passenger() {
  const {
    mainContent,
    sectionMain,
    storeButtons,
    sectionCards,
    secCardsTitle,
  } = styles;

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
    <main>
      <section className={sectionMain}>
        <div className={mainContent}>
          <p>
            <strong>Passageiro</strong>
          </p>
          <h1>Com a gente você chega onde quer.</h1>
          <p>
            Mais rápido. Mais barato. <strong>Pega Lev!</strong>
          </p>
          <div className={storeButtons}>
            <a
              href='https://apps.apple.com/br/app/moby-app-passageiro/id1483733628'
              rel='noreferrer noopener'
              target='_blank'>
              <img src={appstore} alt='appstore' />
            </a>
            <a
              href='https://play.google.com/store/apps/details?id=mobyapp.passageiro&hl=en_US&gl=US'
              rel='noreferrer noopener'
              target='_blank'>
              <img src={googleplay} alt='google play' />
            </a>
          </div>
        </div>
        <img src={car} alt='carro lev' />
      </section>

      <div className={secCardsTitle}>
        <img src={vLev} alt='icone lev' />
        <h2>Vantagens de ser Lev.</h2>
      </div>
      <CardsContainer
        className={sectionCards}
        cards={benefits.passenger}
        isMobile={isMobile}
      />
    </main>
  );
}

export default Passenger;
