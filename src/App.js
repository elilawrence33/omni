import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversation from './components/conversation';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="convo-wrapper"> 
        <Conversation/>
      </div>
    </div>
  );
}

export default App;
