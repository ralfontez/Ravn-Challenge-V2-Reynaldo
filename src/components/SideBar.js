import React from 'react';
import ItemSideBar from './ItemSideBar';

import { useQuery, gql } from '@apollo/client';


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

const divStyle = {
    position: "absolute",
    width: "350px",
    // height: "100%",
    left: "0px",
    top: "52px",
    background: "#FFFFFF",
    boxShadow: "1px 0px 0px rgba(0, 0, 0, 0.15)",
    paddingLeft: "14.89px",
}


// function GetPersonById (e,id) {
//     e.preventDefault()
//     console.log('GetPersonById =========')
//     console.log(id)

//     this.props.personID(id)

   
// };


// function AllPersons() {
    
//     const { loading, error, data } = useQuery(ALL_PERSONS);

//     console.log(data);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Failed to Load Data</p>;

//     return data.allPeople.people.map(({ id, name, species, homeworld }) => (
//         <div key={id}>
//             <a href="#" onClick={(e) => GetPersonById(e,id)}>
//                 <ItemSideBar name={name} species={species} homeworld={homeworld} />
//             </a>
//         </div>
//     ));
// };

const itemStyle = {
    backgroundColor: "#FFFFFF",
    height:"69px",
    width:"349px",
    // paddingLeft: "14.89px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",

};

const loadingStyle = {
    backgroundColor: "#FFFFFF",
    height:"69px",
    width:"349px",
    float: "center",
    marginLeft: "14.89px",
    // borderBottom: "1px solid rgba(0, 0, 0, 0.1)",

};

function SideBar({ onDogSelected }) {

    const { loading, error, data } = useQuery(ALL_PERSONS);
  
    if (loading) return <div style={loadingStyle}>{'Loading...'}</div>;
    if (error) return `Error! ${error.message}`;

  
        return (<div style={divStyle}>
           {data.allPeople.people.map(({ id, name, species, homeworld }) => (
            <div key={id} onClick={(e) => onDogSelected(e,id)} style={itemStyle}>            
                    <ItemSideBar name={name} species={species} homeworld={homeworld} />
            </div>
        ))}
        </div>);

    // return (
    //   <select  style={selectStyle} name="dog" onChange={onDogSelected}>
    //     {data.allPeople.people.map(({ id, name, species, homeworld }) => (
    //       <option key={id} value={name}>
    //         {name}
    //       </option>
    //     ))}
    //   </select>
    // );
}

// const SideBar =(props)=> {

    
//         return (
//             <div style={divStyle}>
//                 <AllPersons />
//             </div>
//         )
// }


export default SideBar;