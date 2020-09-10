import React from 'react';

function ItemSideBar(props) {    
    return (
        <div className="">
            <div className="PeopleName">
                {props.people.name}
            </div>
            <div className="PeopleInfo">
                <div className="Specie">
                    {props.people.specie}
                </div>
                <div className="Planet">
                    {props.people.planet}
                </div>
            </div>            
        </div>
    )     
}
    

export default ItemSideBar;