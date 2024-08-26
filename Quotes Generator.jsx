import React, { useState, useEffect } from 'react';
const QuotesGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container text-center mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Random Quote</h5>
          <p className="card-text">"{quote}"</p>
          <footer className="blockquote-footer">{author}</footer>
          <button className="btn btn-primary mt-3" onClick={fetchQuote}>
            Get New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotesGenerator;
