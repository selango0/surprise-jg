import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Confetti from "react-canvas-confetti";
import LoadingSpinner from './loading-spinner';
import ErrorMessage from './error-message';
import QuoteContainer from './quote-container';


const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  // https://sheet.best/api/sheets/38028fac-ebe8-4298-8bbb-1b8af612d31b
  // testing: https://autumnchris-quotes.herokuapp.com/api/quotes
  function fetchQuotes() {
    axios.get('https://sheet.best/api/sheets/38028fac-ebe8-4298-8bbb-1b8af612d31b').then(response => {
      setQuotes(response.data);
      setLoadingStatus(false);
    }).catch(() => {
      setQuotes([]);
      setLoadingStatus(false);
    });
  }

  return (
    <React.Fragment>
      <header>
        <h1>Happy Golden Birthday Jackie!</h1>
      </header>
      <main>
        {loadingStatus ? <LoadingSpinner /> : quotes.length !== 0 ? <QuoteContainer quotes={quotes} /> : <ErrorMessage />}
      </main>
      <footer>Created for Jackie's 26th Birthday! &copy; 2021 (updated 1/15/22)</footer>
    </React.Fragment>
  );
}

export default App;
