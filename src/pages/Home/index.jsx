import React from 'react';
import styles from '../../styles/Home.module.css';
import phone from '../../images/home/single-phone.png';
import phones from '../../images/home/dual-phones.png';
import pontinha from '../../images/home/pontinha.svg';
import HomeSlider from '../../components/HomeSlider';
import faq from '../../data/faq';
import Faq from '../../components/Faq';

function Home() {
  const {
    container,
    firstSection,
    slogan,
    spotlight,
    lowProfile,
    firstArticle,
    secondArticle,
    tip,
    secondSection,
    thirdSection,
    thirdSectionBackground,
    fourthSection,
    fourthSectionCard,
    fifthSection,
  } = styles;
  
  return (
    <main className={container}>
      <section className={firstSection}>
        <article className={firstArticle}>
          <img src={phone} alt='Smartphone' />
          <div>
            <p className={slogan}>Vem ser Lev!</p>
            <h1 className={spotlight}>
              Baixe agora o App,
              <br />
              já disponível na região de Florianópolis!
            </h1>
            <p className={lowProfile}>Mais rápido. Mais barato. Pega Lev</p>
          </div>
        </article>
        <article className={secondArticle}>
          <div>
            <p className={slogan}>Vem ser Lev!</p>
            <h1 className={spotlight}>
              Viaje com segurança e sem preocupações!
            </h1>
            <p className={lowProfile}>
              Sistema de rastreamento para acompanhar o trajeto durante sua
              corrida.
            </p>
            <button>Saiba mais</button>
          </div>
          <img src={phones} alt='Smartphones' />
        </article>
        <img className={tip} src={pontinha} alt='pontinha' />
      </section>
      <section className={secondSection}>
        <HomeSlider />
      </section>
      <section className={thirdSection}>
        <article>
          <section>
            <h1>Conheça todos os <span>nossos benefícios!</span></h1>
          </section>
          <p>
            Cashback para motoristas e usuários, prêmios, suporte físico para
            atendê-los e muuito mais, venha saber tudo!
          </p>
          <div>
            <button>Benefícios de Motorista</button>
            <button>Benefícios de Usuário</button>
          </div>
        </article>
        <div className={thirdSectionBackground}>
        </div>
      </section>
      <section className={fourthSection}>
        <div>
          <section className={fourthSectionCard}>
            <h1>
              Venha conhecer <br />a nossa história!
            </h1>
            <p>
              Saiba como a Lev foi criada, quais são os nossos valores, missão e
              visão!
            </p>
            <button>Quero conhecer</button>
          </section>
        </div>
      </section>
      <section className={fifthSection}>
        <div>
          <h1>Perguntas Frequêntes.</h1>
          {faq.map(({ question, answer }, key) => (
            <Faq key={key} question={question} answer={answer} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
