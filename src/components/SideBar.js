import React, {Component} from 'react';
import ItemSideBar from './ItemSideBar';


const people ={
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
}

class SideBar extends Component{

    render(){
        return (    
            <div>
                <ItemSideBar people={people}/>
                <ItemSideBar people={people2}/>
                <ItemSideBar people={people3}/>
            </div>            
        )   
    }
}
    

export default SideBar;