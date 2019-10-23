import React, { useState, useEffect, useRef } from 'react';
import axiosWithAuth from '../axios';
import { Formik, Form, Field } from 'formik';
import { users } from '../static/static';

const apiBase = `https://tipsease-msm.herokuapp.com`;

const Customer = () => {
  const [ workers, setWorkers ] = useState(users);
  const [ searchResults, setSearchResult] = useState([]);
  const [ searched, alterSearch] = useState(false);
  const [ tipping, setTip ] = useState(false);
  const username = useRef();
  const tipRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    const name = username.current.value;
    const resultingArray = workers.filter(worker => 
      name.toLowerCase() === worker.username.toLowerCase() ||
      name.toLowerCase() === worker.FirstName.toLowerCase() ||
      name.toLowerCase() === worker.LastName.toLowerCase() ||
      name.toLowerCase() === `${worker.FirstName.toLowerCase()} ${worker.LastName.toLowerCase()}`
    );

    alterSearch(true)
    setSearchResult(resultingArray)
  }

  const tip = (worker) => {
    setTip(!tipping);
    if(searchResults.length <= 0)setSearchResult(searchResults.concat(worker));
  }

  useEffect(() => {
    axiosWithAuth().get(`${apiBase}/api/serviceworker`).then(res => {
      setWorkers(res.data)
    }).catch(err => console.error(err));
  }, [])

  return(
    <div className='dashboard'>
      <form className='search-form' onSubmit={submit}>
        <input className='search-input' ref={username}></input>
        <button className='search-button'>Find</button>
      </form>
      <div className='worker-cards'>
      {
        workers.length > 0 && searchResults.length <= 0 &&
        !searched &&
        workers.map(worker => (
          <div className='worker-card'>
            <h2 className='card-text'>Name: {worker.FirstName} {worker.LastName}</h2>
            <h3 className='catch-phrase'>Tagline: {worker.tagline}</h3>
            <h3 className='card-text'>Company: {worker.company}</h3>
            <h3 className='card-text'>Years at Company: {worker.YearsAtCompany}</h3>
            {tipping && (<input placeholder='Amount in $'  ref={tipRef} className='tip-box' ></input>)}
            <button className='tip-button' onClick={() => tip(worker)}>
              Tip
            </button>
          </div>
        ))
      }
      {
        searchResults.length > 0 &&
        searchResults.map(worker => (
          <div className='worker-card'>
            <h2 className='card-text'>Name: {worker.FirstName} {worker.LastName}</h2>
            <h3 className='catch-phrase'>Tagline: {worker.tagline}</h3>
            <h3 className='card-text'>Company: {worker.company}</h3>
            <h3 className='card-text'>Years at Company: {worker.YearsAtCompany}</h3>
            {tipping && (<input placeholder='Amount in $' className='tip-box' ref={tipRef}></input>)}
            <button 
            className='tip-button' 
            onClick={() => {
              tip(worker)
            }}>
              Tip
            </button>
          </div>
        ))
      }
      
      {
        searched && searchResults.length <= 0 && 
        (<h2>No Workers Found!</h2>)
      }
      </div>
    </div>
  );
}

export default Customer;