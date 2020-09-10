import React, {Component} from 'react';
import ItemSideBar from './ItemSideBar';

import { useQuery, gql } from '@apollo/client';

/*const people ={
    name: "Sky walker",
    specie: "Human",
    plante: "Tatoine"
}

const people2 ={
    name: "Sky walker",
    specie: "Human",
    plante: "Tatoine"
}

const people3 ={
    name: "Sky walker",
    specie: "Human",
    plante: "Tatoine"
}*/

const ALL_PERSONS = gql`
  query getPersons{
    allPeople{
      people{
        name
        birthYear
        skinColor
        species{
          name
        }
        homeworld{
          name
        }
      }
      totalCount
    }
  }
`;

function AllPersons() {
  const { loading, error, data } = useQuery(ALL_PERSONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allPeople.people.map(({name, species, homeworld}) => (
        <div>
            <ItemSideBar name={name} species={species} homeworld={homeworld}/>
        </div>
  ));
}

const divStyle = {
    position: "absolute",
    width: "350px",
    height: "848px",
    left: "0px",
    top: "52px",
    background: "#FFFFFF",
    boxShadow: "1px 0px 0px rgba(0, 0, 0, 0.15)",
}

class SideBar extends Component{

    render(){
        return (    
            <div style={divStyle}>                
                <AllPersons/>  
            </div>            
        )   
    }
}
    

export default SideBar;