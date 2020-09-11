import React from 'react';

import InfoCell from './InfoCell';
import TableSectionHeader from './TableSectionHeader';

import { useQuery, gql } from '@apollo/client';

const divStyle = {
    marginTop: "52px",
    marginLeft: "450px",
    marginRight: "100px", 

    background: "#FFFFFF",
}

const PERSON_BY_ID = gql`
    query GetPeople($personID: ID!){
        person(id: $personID){
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


function Content(props){

    const { loading, error, data } = useQuery(PERSON_BY_ID, {
        variables: { personID: props.personID},
    });
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`

    return (
        <div>
            <div className="" style={divStyle}>
                <TableSectionHeader>General Information</TableSectionHeader>
                <InfoCell key="1" info="Eye Color" value={data.person.eyeColor}></InfoCell>
                <InfoCell key="2" info="Hair Color" value={data.person.hairColor}></InfoCell>
                <InfoCell key="3" info="Skin Color" value={data.person.skinColor}></InfoCell>
                <InfoCell key="4" info="birth Year" value={data.person.birthYear}></InfoCell>
                <TableSectionHeader>Vehicles</TableSectionHeader>
                {data.person.vehicleConnection.vehicles.map(({ id, name }) => (                    
                    <div key={id}><InfoCell >{name}</InfoCell></div>                
                ))} 
            </div>
        </div>
    )
}

export default Content;