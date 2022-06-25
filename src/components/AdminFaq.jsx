import React from 'react';
import { useState } from 'react';
import Database from '../firebase/firebase';
import styles from  '../styles/AdminFaq.module.css';

function AdminFaq(props) {
  const {id, name, email, question, answer, active, type} = props;

  const [stateForm, setStateForm] = useState({
    questionS: question,
    answerS: answer,
    activeS: active,
    typeS: type,
  });
  
  const {questionS, answerS, activeS, typeS} = stateForm;

  const onInputChangeHandler = ({ target: {name, value, checked} }) => {
    if (name === 'activeS') {
      setStateForm((prev) => ({
        ...prev,
        [name]: checked,
      }));
      return;
    }
    setStateForm((prev) => ({
      ...prev,
      [name]: value ,
    }));
  };

  const {
    container
  } = styles;

  const saveChanges = () => {
    const db = new Database();
    db.edit(id, questionS, answerS, typeS, activeS, name, email);
  };

  return (
    <div className={container}>
      <span>Nome: {name}</span>
      <span>Email: {email}</span>
      <label htmlFor={questionS}>
        Pergunta: 
        <textarea
          type="text"
          id={questionS}
          name="questionS"
          value={questionS}
          onChange={onInputChangeHandler}
          rows="6"
        />
      </label>
      <label htmlFor={answerS}>
        Resposta: 
        <textarea
          type="text"
          id={answerS}
          name="answerS"
          value={answerS}
          onChange={onInputChangeHandler}
          rows="6"
        />
      </label>
      <label htmlFor={name}>
        Ativa: 
        <input
          type="checkbox"
          id={name}
          name="activeS"
          checked={activeS}
          rows="6"
          onChange={onInputChangeHandler}
        />
      </label>
      <select
        onChange={onInputChangeHandler}
        value={typeS}
        name="typeS"
      >
        Tipo: 
        <option value="driver">Motorista</option>
        <option value="passenger">Passageiro</option>
        <option value="general">Geral</option>
      </select>
      <button onClick={saveChanges}>Salvar</button>
    </div>
  );
}

export default AdminFaq;
