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
        id
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

const PERSON_BY_ID = gql`
    query GetPeople($personID: ID){
        person(personID: $personID){
            eyeColor
            hairColor
            skinColor
            birthYear
                vehicleConnection{
                    vehicles {
                        name
                    }
            }
        }
    }
`;

function GetPersonById(id) {
    const { loading, error, data } = useQuery(PERSON_BY_ID, {
      variables: { personID: id }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return <h1>Hello {data.person.eyeColor}!</h1>;
  }


function AllPersons() {
  const { loading, error, data } = useQuery(ALL_PERSONS);
  
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allPeople.people.map(({id, name, species, homeworld}) => (
        <div>           
            <ItemSideBar onClick={(id)=>GetPersonById(id)} key={id} name={name} species={species} homeworld={homeworld}/>            
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