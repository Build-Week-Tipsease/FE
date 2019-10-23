import React from 'react';
import './App.css';
import Routes from './components/Rout/Routes';
import ServiceWorker from './components/dashboard/ServiceWorker'


function App() {
  return (
    <div className="App">
      
      <Routes />
      <ServiceWorker />

    </div>
  );
}

export default App;
