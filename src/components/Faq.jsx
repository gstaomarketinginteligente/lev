import React, { useState } from 'react';
import styles from '../styles/Faq.module.css';

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
      <hr />
      <div className={ `${answerContainer} ${answerActive ? active : ''}` }>
        <p>{answer}</p>
      </div>
      {/* <details>
        <summary>{question}</summary>
        <p>{answer}</p>
      </details> */}
    </div>
  )
}

export default Faq;