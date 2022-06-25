/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import AdminFaq from '../../components/AdminFaq';
import Database from '../../firebase/firebase';
import styles from './Admin.module.css';

function Admin({ header }) {
  const [response, setResponse] = useState();
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const fetchFaq = async () => {
      const db = new Database();
      const dbResponse = await db.getFaq();
      setResponse(dbResponse)
    };
    fetchFaq();
    header(true);
  }, []);

  useEffect(() => {
    if (response) {
      const entries = Object.entries(response);
      setFaq(entries);
    }
  }, [response]);

  const {
    container
  } = styles;

  return (
    <div className={container}>
      {faq.map(([entrie, { answer, author, authorEmail, question, type, active }]) => (
        <AdminFaq
          key={entrie}
          id={entrie}
          name={author}
          email={authorEmail}
          answer={answer}
          author={author}
          authorEmail={authorEmail}
          question={question}
          type={type}
          active={active}
        />
      ))}
    </div>
  );
}

export default Admin;
