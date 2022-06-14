import React, { useState } from 'react';
import styles from '../styles/Faq.module.css';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

function Faq({ question, answer }) {
  const {
    container,
    questionContainer,
    answerContainer,
    active,
    chevron
  } = styles;

  const [answerActive, setAnswerActive] = useState(false);

  return (
    <div className={ container }>
      <div
        className={ questionContainer }
        onClick={ () => setAnswerActive((prev) => !prev) }
      >
        <h3>{question}</h3>
        <i className={`bi ${chevron} bi-chevron-down ${answerActive ? active : ''}`}></i>
      </div>
      <div className={ `${answerContainer} ${answerActive ? active : ''}` }>
        <p>{answer}</p>
      </div>
      <hr />
    </div>
  )
}

export default Faq;