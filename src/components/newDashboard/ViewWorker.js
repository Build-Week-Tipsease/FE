import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from 'axios';

import axiosWithAuth from '../axios';

const Cont = styled.div`
  background-color: #0c1d09;
  display: flex;
  justify-content: center;
  padding: 23px 0;
`;
const Card = styled.div`
  background-color: #d2e7d0;
  border-radius: 59%;
  width: 48%;
  height: 78vh;
`;
const Image = styled.img`
  width: 27%;
`;
const NewButton = styled.button`
  background-color: #38af78;
  border-radius: 10px;
  color: #fff;
  border: 2px solid #6fa0d0 !important;
  transition: background-color 0.5s;
  margin: 0 10px;
  &:hover {
    background-color: #fff;
    color: #6fa0d0;
  }
  &:focus {
    background-color: #fff;
    color: #6fa0d0;
  }
`


const data = [
  {
    name: "Jane Doe",
    job: "Waiter",
    years: 5,
    balance: 3000,
    tagline: "fast service",
    image:
      "https://www.cargocrew.com.au/media/catalog/product/cache/1/image/580x770/040ec09b1e35df139433887a97daa66f/c/a/cargocrew-uniform-apron-tom-bib-black-womens-5.jpg"
  }
];
const apiBase=`https://tipsease-msm.herokuapp.com/api`


const ViewWorker = () => {
  const worker=JSON.parse(localStorage.getItem('worker'))
  const tipRef=useRef();

  const tipWorker = (worker) => {
    console.log(tipRef.current.value)
    axios.put(`${apiBase}/serviceworker/${worker.id}/tip`,{
        username: worker.username,
        company: worker.company,
        balance: tipRef.current.value
      }).then(res => {
      alert(res.data.message)
    })
  }

  return (
    <Cont>
      <Card key={worker.id}>
        <h3>{worker.FirstName} {worker.LastName}</h3>
        <Image src={worker.image} />
        <p>Job~ {worker.company}</p>
        <p>Years~ {worker.YearsAtCompany}</p>
        <p>Tagline~ {worker.tagline}</p>
        <button style={{ width: '40%', float: 'right' }} className='tip-button' onClick={() => tipWorker(worker)}>
          Add Tip
        </button>
        <input style={{ width: '40%' }} placeholder='Amount in $'  ref={tipRef} className='tip-box' ></input>
        
      </Card>
    </Cont>
  );
}
export default ViewWorker;

