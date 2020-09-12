import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar';
import Content from './components/Content';

 
//import {  gql } from '@apollo/client';

// const EXCHANGE_RATES = gql`
//   query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;


// function ExchangeRates() {
//   const { loading, error, data } = useQuery(EXCHANGE_RATES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.rates.map(({ currency, rate }) => (
//     <div key={currency}>
//       <p>
//         {currency}: {rate}
//       </p>
//     </div>
//   ));
// }




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: 'cGVvcGxlOjE=',
    }
  }

  callbackFunction = (e, childData) => {
    this.setState({message: childData})
    console.log("childData")
    console.log(childData)
  }

  render() {
    return (       
      <div>               
        <NavBar/>
        <SideBar onDogSelected = {(e, id)=>this.callbackFunction(e, id)}/>    
        <Content personID = {this.state.message}/>                  
      </div>       
    );
  }
}

export default App;
