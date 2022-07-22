import React, { useEffect } from "react";
import styles from "../../styles/Who.module.css";
import levseta from "../../images/who/v-seta.svg";
import timeline from "../../images/who/timeline.svg";
import celularAzul from "../../images/who/celular-azul.png";
import celularLaranja from "../../images/who/celular-laranja.png";
import rightArrow from "../../images/who/right-arrow.svg";
import homem from "../../images/who/homem.png";
import { scrollTop } from "../../helpers/scrollHelper";
import { Link } from 'react-router-dom';

function Who() {
  useEffect(() => {
    scrollTop();
  }, []);

  const {
    mainSection,
    section2,
    section2Title,
    section3,
    section4,
    section4Content,
    section4ContentWrapper,
    whoMain,
    button,
    celularAzulMobile,
    celularLaranjaMobile,
    timelineimg,
    section4ContentTitle,
    levsetaMobile,
    sectionContainer,
    section3Content,
    contentContainer,
  } = styles;

  return (
    <main className={whoMain}>
      <section className={mainSection}>
        <div className={sectionContainer}>
          <h1>Quem somos</h1>
        </div>
      </section>

      <section className={section2}>
        <div className={sectionContainer}>
          <div className={contentContainer}>
            <p className={section2Title}>
              A Lev chegou ao Brasil para engrandecer o mercado de mobilidade
              urbana.
            </p>
            <p>
              Garantindo liberdade e segurança para nossos parceiros e clientes,
              o objetivo da Lev é ouvir, valorizar e trabalhar com ética,
              transparência e leveza com os parceiros Lev.
            </p>
            <p>
              Com valores e taxas menores que seus concorrentes, a Lev Moby tem
              uma visão de longo prazo, a qual busca centralizar o mercado
              brasileiro de aplicativos de mobilidade urbana, sempre respeitando
              os princípios éticos e valores do segmento
            </p>
          </div>
          <img src={homem} alt="homem" />
        </div>
      </section>

      <section className={section3}>
        <div className={sectionContainer}>
          <div className={section3Content}>
            <h1>Na Lev você pode aumentar seus ganhos!</h1>
            <p>
              Além de ser convidativa a quem já atua como motorista em outros
              aplicativos de mobilidade, a Lev se torna uma oportunidade de
              negócio para quem almeja aumentar seus ganhos ou ter seu próprio
              negócio.
            </p>
            <Link to="/driver" className={button}>
              Saiba mais <img src={rightArrow} alt="seta direita" />
            </Link>
          </div>
        </div>
      </section>

      <section className={`${section4} ${sectionContainer}`}>
        <h1>
          <img src={levseta} className={levsetaMobile} alt="lev v" />
          <img src={levseta} alt="lev v" /> <h1>História da Lev.</h1>
        </h1>
        <div className={section4ContentWrapper}>
          <img src={timeline} className={timelineimg} alt="linha do tempo" />
          <div>
            <div className={section4Content}>
              <div>
                <img
                  src={celularLaranja}
                  className={celularLaranjaMobile}
                  alt="celular lev laranja"
                />
                <h2 className={section4ContentTitle}>2018</h2>
                <p>
                  A história da Lev começa em 2018, na cidade de Caldas Novas -
                  GO, quando um dos sócios da Moby, nome que a marca tinha
                  naquela época, notou que a cidade tinha um sério problema de
                  mobilidade urbana. <br />
                  <br />
                  Ao reparar esta necessidade um dos sócios visualizou uma
                  grande oportunidade, e assim fundou a Moby. <br />
                  <br />
                  Após apresentar a Moby em reunião com o prefeito e alguns
                  vereadores, a ideia foi amplamente abraçada, todos conseguiam
                  ver a grande oportunidade de novos empregos e avanço da
                  mobilidade urbana que o aplicativo poderia trazer para a
                  cidade e região. <br />
                  <br />
                  <h2 className={section4ContentTitle}>2019</h2>
                  Assim sendo a Lev Moby iniciou seus serviços e primeiros
                  testes em 2019 na prática.
                  <br />
                  <br />
                  Ao longo dos anos tanto o aplicativo quanto a empresa foram
                  sendo aprimorados, entrou um novo sócio especializado em TI, o
                  que resultou em grandes avanços na parte técnica do app.{" "}
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </div>
              <img src={celularLaranja} alt="celular lev laranja" />
            </div>

            <div className={section4Content}>
              <div>
                <p>
                  <h2 className={section4ContentTitle}>2021</h2>
                  Em 2021 um terceiro sócio foi captado. Agregando muito
                  conhecimento em estratégias comerciais e aumentando os
                  investimentos, o objetivo da empresa com a entrada desse sócio
                  era expandir a plataforma para todo o Brasil. <br />
                  <br />
                  Com todo o planejamento de expansão saindo do papel e com o
                  auxílio de uma Aceleradora de Empresas, o aplicativo teve todo
                  um trabalho de Rebranding e seu nome foi atualizado para Lev
                  Moby, solução que chegou para solucionar um gargalo de SEO que
                  o nome Moby sozinho carregava. <br />
                  <br />
                  <h2 className={section4ContentTitle}>2022</h2>
                  Em 2022 a marca Lev da início à expansão para todo o Brasil.
                  Com a região de grande Florianópolis sendo a primeira região
                  vendida, a captação de usuários e motoristas no litoral
                  catarinense foi iniciada. Agora a empresa busca novos
                  investidores e parceiros para expandir seus serviços ainda
                  mais. <br />
                  <br />O mercado de mobilidade urbana no Brasil é enorme e
                  tende a crescer muito mais, a principal meta da Lev é
                  conquistar usuários, motoristas e investidores em todo o
                  território brasileiro, a hora é agora.
                  <img
                    src={celularAzul}
                    className={celularAzulMobile}
                    alt="celular lev azul"
                  />
                </p>
              </div>
              <img src={celularAzul} alt="celular lev azul" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Who;
