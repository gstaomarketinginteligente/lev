import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child, update } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBLTIOSxyrss-GjUnKSFtczcdVlBDPPrQg",
  authDomain: "faq-lev.firebaseapp.com",
  databaseURL: "https://faq-lev-default-rtdb.firebaseio.com",
  projectId: "faq-lev",
  storageBucket: "faq-lev.appspot.com",
  messagingSenderId: "451871842731",
  appId: "1:451871842731:web:763ff1e90229c3d16472ee",
  measurementId: "G-GV7V30QSG0"
};

class Database {
  app;
  analytics;
  database;

  constructor(){
    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
    this.database = getDatabase(this.app);
  }
  
  getFaq = async () => {
    const faq = await get(child(ref(this.database), 'faq'));
    return faq.val();
  };

  getFaqSize = async () => {
    const faq = await get(child(ref(this.database), 'faq'));

    return faq.exists ? faq.size : 0;
  };

  ask = async (author, authorEmail, question, type) => {
    const id = await this.getFaqSize() + 1; 
    set(ref(this.database, 'faq/' + id), {
      author,
      authorEmail,
      type,
      question,
      answer: '',
      active: false, 
    });
  };

  edit = (id, question, answer, type, active, author, authorEmail) => {
    const updatePosition = `faq/${id}`;
    const updateObj = { [updatePosition]: {question, answer, type, active, author, authorEmail} };

    update(ref(this.database), updateObj);
  };

}

export default Database;