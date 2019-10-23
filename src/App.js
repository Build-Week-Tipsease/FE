import React from 'react';
import './App.css';
import Routes from './components/Rout/Routes';



function App(props) {
  return (
    <div className="App">
        <Routes {...props}/>
    </div>
  );
}

export default App;
