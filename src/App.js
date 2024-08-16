import React from 'react';
import Header from './components/Header';
import './styles/App.css';

function App({ children }) {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default App;
