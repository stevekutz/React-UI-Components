import React from 'react';
import './App.css';
import  './index.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';


const App = () => {
  return (
    <div className = "app-container">
      <HeaderContainer />
      <CardContainer />

    </div>
  );
};

export default App;
