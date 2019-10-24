import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
const input=`https://tipsease-msm.herokuapp.com`
const ServiceWorker=(props)=> {
  const {values, handleBlur, touched, errors} = props  
    
  const [service, setService] = useState(data);
  const id = localStorage.getItem('id')
  
  useEffect(() => {
    axiosWithAuth().get(`${input}/api/serviceworker/${id}`)
        .then(res => {
        console.log(`response`, res.data)
        if(id)setService([res.data]);
        console.log(service)
    })
    .catch(error => {
        console.log(`no tips`, error)
        // will change to axios data
        
    })
    
  },[]);
  return (
    <Cont>
      
      {service.map((i, index) => {
        return (
          <Card key={index}>
            <h3>{i.FirstName} {i.LastName}</h3>
            <Image src={data[0].image} />
            <p>Job~ {i.company}</p>
            <p>Years~ {i.YearsAtCompany}</p>
            <p>Tagline~ {i.tagline}</p>
            <p>Tips~ ${i.balance}</p>

            
          </Card>
        );
      })}
    </Cont>
  );
}
export default ServiceWorker;


{/* <form onSubmit="submit">
              <Form.Item
                help={
                  touched.tip && errors.tip
                    ? errors.tip
                    : ""
                }
                validateStatus={
                  touched.tip && errors.tip ? "error" : undefined
                }
              >
                <p>Gratitude</p>
                <NumberFormat thousandSeparator={true} prefix={'$'} />
                <NewButton type='submit'>Send</NewButton>
              </Form.Item>
            </form> */}
// import ServiceWorker from './components/dashboard/ServiceWorker'