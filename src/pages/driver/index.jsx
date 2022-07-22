import React, { useEffect, useState, useRef } from 'react';
import styles from '../../styles/Driver.module.css';
import person from '../../images/driver/person.png';
import personMobile from '../../images/driver/personMobile.png';
import logoMinimal from '../../images/logo-minimal.svg';
import levButton from '../../images/driver/levButton.svg';
import pontinha from '../../images/home/pontinha.svg';
import { benefits } from '../../data/benefits';
import Calculator from '../../components/Calculator';
import CardsContainer from '../../components/CardsContainer';
import { scrollTop } from '../../helpers/scrollHelper';
import { HashLink as Link } from 'react-router-hash-link';
import jQuery from 'jquery';

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
    lev
  } = styles;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    checkIsMobile();
    scrollTop();
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

  const dataDriverForm = {
    name: "",
    email: "",
    tel: "",
  };

  var script_url =
    "https://script.google.com/macros/s/AKfycbzBHsYi37bbZG1V6zoosV1b2_hhGWvK0Uc7nvMvbBxemmALMUCe/exec";
  var emailcheck = false;
  // Make an AJAX call to Google Script

  function insert_value() {
    var name = dataDriverForm.name;
    var email = dataDriverForm.email;
    var tel = dataDriverForm.tel;

    var url =
      script_url +
      "?callback=ctrlq&name=" +
      name +
      "&tel=" +
      tel +
      "&email=" +
      email +
      "&action=insert";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  }

  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const button1 = useRef(null);

  function sendData() {
    const nameDriverForm = input1.current.value;
    const emailDriverForm = input2.current.value;
    const telDriverForm = input3.current.value;
    const btnDriverForm = button1.current;

    dataDriverForm["name"] = nameDriverForm;
    dataDriverForm["email"] = emailDriverForm;
    dataDriverForm["tel"] = telDriverForm;

    btnDriverForm.style.pointerEvents = "none";
    btnDriverForm.style.backgroundColor = "lightgray";

    insert_value();
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
          <Link to='#form' className={lev}>Quero ser motorista</Link>
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
        <CardsContainer
          cards={benefits.driver}
          className={cardsContainer}
          isMobile={isMobile}
          dots
        />
      </section>
      <section className={letterSection}>
        <h1>Na Lev você pode aumentar seus ganhos!</h1>
        <p>
          Além de ser convidativa a quem já atua como motorista em outros
          aplicativos de mobilidade, a Lev se torna uma oportunidade de negócio
          para quem almeja aumentar seus ganhos ou ter seu próprio negócio.
        </p>
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
          <div id='form'></div>
        </section>
      </section>
      <section className={signinSection} >
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
        <form id='formDriverForm'>
          <input id="nameDriverForm" type='text' placeholder='Nome:' ref={input1} />
          <input id="emailDriverForm" type='email' placeholder='Email:' ref={input2} />
          <input id="telDriverForm" type='tel ' placeholder='Telefone:' ref={input3} />
          <button id="btnDriverForm" type='submit' ref={button1} onClick={(e) => {
            e.preventDefault();
            sendData();
          }}>
            Quero ser motorista!
          </button>
        </form>
      </section>
    </main>
  );
}

export default Driver;