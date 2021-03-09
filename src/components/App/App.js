import React, { useState, useEffect } from 'react';
import './App.css';
import fetchRequests from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App() {

  const [urls, setUrls] = useState([])

  useEffect(() => {
    fetchRequests.getUrls().then(results => setUrls(results['urls']))
  }, [])

  const updateUrls = () => {
    fetchRequests.getUrls().then(results => setUrls(results['urls']))
  }

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm updateUrls={updateUrls}/>
      </header>

      <UrlContainer urls={urls}/>
    </main>
  );

}

export default App;
