import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDsWF9bfj4Q0m1U_bGqVujBZN0m2IGyTqA",
  authDomain: "levweb-ed212.firebaseapp.com",
  databaseURL: "https://levweb-ed212-default-rtdb.firebaseio.com",
  projectId: "levweb-ed212",
  storageBucket: "levweb-ed212.appspot.com",
  messagingSenderId: "231643766080",
  appId: "1:231643766080:web:0d18f08e6eac8287aaeea5",
  measurementId: "G-E5J799N7GD"
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
  }

  getFaqSize = async () => {
    const faq = await get(child(ref(this.database), 'faq'));

    return faq.exists ? faq.size : 0;
  }

  ask = async (author, authorEmail, question, type) => {
    const id = await this.getFaqSize() + 1; 
    set(ref(this.database, 'faq/' + id), {
      author,
      authorEmail,
      type,
      question,
      answer: '',
    });
  }

}

export default Database;