import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar';
import Content from './components/Content';

 
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

function App() {
  return (       
        <div>               
          <NavBar/>
          <SideBar/>      
          <Content/>
          <ExchangeRates/>
        </div>       
  );
}

export default App;
