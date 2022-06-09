import React, { useEffect, useState } from 'react';
import styles from '../../styles/Help.module.css';
import faq from '../../data/faq';
import Faq from '../../components/Faq';
import Database from '../../firebase/firebase';

function Help() {
  const {
    container,
    searchArea,
    magnifierIcon,
    arrowIcon,
    answersArea,
    questionFormArea,
  } = styles;

  const [passangerFaq, setPassangerFaq] = useState([]);
  const [driverFaq, setDriverFaq] = useState([]);
  const [questionForm, setQuestionForm] = useState({
    name: '',
    email: '',
    question: '',
    type: 'passenger',
  });

  useEffect(() => {
    const db = new Database();
    const fetchFaq = async () => {
      const faq = await db.getFaq();
      const passangerFaq = [];
      const driverFaq = [];
      const generalFaq = [];
      for (const question in faq) {
        faq[question]?.type === 'passenger'
          ? passangerFaq.push(faq[question])
          : faq[question]?.type === 'driver'
          ? driverFaq.push(faq[question])
          : generalFaq.push(faq[question]);
      }
      setDriverFaq(driverFaq);
      setPassangerFaq(passangerFaq);
    };
    fetchFaq();
  }, []);

  const questionHandler = (e) => {
    const db = new Database();
    const { name, email, question, type } = questionForm;
    name && email && question && type && db.ask(name, email, question, type);
  };

  const questionInputChangeHandler = ({ target }) => {
    console.log(target.id, target.value);
    setQuestionForm((prev) => ({
      ...prev,
      [target.id]: target.value,
    }));
  };

  return (
    <main className={container}>
      <section className={searchArea}>
        <h1>Como podemos te ajudar?</h1>
        <p>Se não encontrar o precisa aqui, melhor pesquisar!</p>
        <label htmlFor='search'>
          <i className={`bi bi-search ${magnifierIcon}`}></i>
          <input type='text' id='search' placeholder='Qual a sua dúvida?' />
          <i className={`bi bi-arrow-right ${arrowIcon}`}></i>
        </label>
      </section>
      <section className={answersArea}>
        <h1>Perguntas Frequêntes</h1>
        <section>
          <h2>Geral.</h2>
          {faq.map(({ question, answer }, key) => (
            <Faq key={key} question={question} answer={answer} />
          ))}
        </section>
        <section>
          <h2>Motorista.</h2>
          {driverFaq.map(({ question, answer }, key) => (
            <Faq key={key} question={question} answer={answer} />
          ))}
        </section>
        <section>
          <h2>Usuário.</h2>
          {passangerFaq.map(({ question, answer }, key) => (
            <Faq key={key} question={question} answer={answer} />
          ))}
        </section>
      </section>
      <section className={questionFormArea}>
        <h1>
          Ainda tem alguma dúvida?
          <br />
          Manda pra gente!
        </h1>
        <form onSubmit={ e => e.preventDefault() }>
          <input
            type='text'
            id='name'
            value={questionForm.name}
            onChange={questionInputChangeHandler}
            placeholder='Nome:*'
            required
          />
          <input
            type='text'
            id='email'
            value={questionForm.email}
            onChange={questionInputChangeHandler}
            placeholder='Seu E-mail:*'
            required
          />
          <textarea
            id='question'
            value={questionForm.question}
            onChange={questionInputChangeHandler}
            placeholder='Escreva sua dúvida aqui:*'
            rows={16}
            required
          />
          <select
            id='type'
            onChange={ questionInputChangeHandler }
            required
          >
            <option value={'passenger'}>Passageiro</option>
            <option value={'driver'}>Motorista</option>
          </select>
          <button type='submit' onClick={questionHandler}>
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}

export default Help;
