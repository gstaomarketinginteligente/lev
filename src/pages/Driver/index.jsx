import React, { useEffect, useState } from 'react';
import styles from '../../styles/Driver.module.css';
import person from '../../images/driver/person.png';
import personMobile from '../../images/driver/personMobile.png';
import logoMinimal from '../../images/logo-minimal.svg';
import levButton from '../../images/driver/levButton.svg';
import BenefitsCard from '../../components/BenefitsCard';
import pontinha from '../../images/home/pontinha.svg';
import { benefits } from '../../data/benefits';
import Calculator from '../../components/Calculator';

function Driver() {
  const {
    container,
    mainContent,
    personS,
    tip,
    benefitsTitle,
    cardsContainer,
    letterSection,
    calculatorSection,
    signinSection,
    head,
  } = styles;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', () => {
      checkIsMobile();
    });
  }, []);

  const checkIsMobile = () => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <main className={container}>
      <section className={mainContent}>
        <article>
          <h2>Motorista</h2>
          <h1>
            Venha fazer parte do time de motoristas mais valorizado do Brasil!
          </h1>
          <p>Mais rápido. Mais barato. Pega Lev</p>
          <button>Quero ser motorista</button>
        </article>
        <img
          className={personS}
          src={isMobile ? personMobile : person}
          alt='Motorista segurando chave de carro'
        />
        <img className={tip} src={pontinha} alt='Logo' />
      </section>
      <section>
        <div className={benefitsTitle}>
          <img src={logoMinimal} alt='logo-minimal' />
          <h1>Vantagens de ser Lev.</h1>
        </div>
        <div className={cardsContainer}>
          {benefits.driver.map(({ icon, title, text }) => (
            <BenefitsCard
              key={title}
              img={icon}
              title={title}
              text={text}
            />
          ))}
        </div>
      </section>
      <section className={letterSection}>
        <h1>Na Lev você pode aumentar seus ganhos!</h1>
        <p>
          Além de ser convidativa a quem já atua como motorista em outros
          aplicativos de mobilidade, a Lev se torna uma oportunidade de negócio
          para quem almeja aumentar seus ganhos ou ter seu próprio negócio.
        </p>
        <button>Saiba mais</button>
        <img src={levButton} alt='Lev' />
      </section>
      <section className={calculatorSection}>
        <article className={head}>
          <h1>Calculadora de lucros.</h1>
          <p>
            Veja o quanto você vai receber a mais! Fique a vontade para editar
            os valores, aqui você tem total controle.
          </p>
        </article>
        <section>
          <Calculator />
          <div></div>
          <div></div>
        </section>
      </section>
      <section className={signinSection}>
        <article>
          <h1>Não deixa para depois!</h1>
          <p>
            Faça agora mesmo sua inscrição para se tornar um Motorista Lev,
            aproveite os melhores benefícios do Mercado.
            <br />
            <br />
            Os primeiros 1000 motoristas cadastrados irão ganhar bonificações
            nas primeiras corridas.
          </p>
        </article>
        <form>
          <input type='text' placeholder='Nome:' />
          <input type='email' placeholder='Email:' />
          <input type='tel ' placeholder='Telefone:' />
          <button type='submit' onClick={(e) => e.preventDefault()}>
            Quero ser motorista Lev!
          </button>
        </form>
      </section>
    </main>
  );
}

export default Driver;
