import React, {Component} from 'react';

import GeneralInfo from './GeneralInfo';
import Info from './Info';



const divStyle = {
    marginTop: "52px",
    marginLeft: "450px",
    marginRight: "100px", 

    background: "#FFFFFF",

}

class Content extends Component{
    render(){
        return (
            <div>
                <div className="" style={divStyle}>
                    <GeneralInfo>General Information</GeneralInfo>
                    <Info info="Eye Color" value="Blue"></Info>
                    <Info info="Hair Color" value="Blond"></Info>
                    <Info info="Skin Color" value="Fair"></Info>
                    <Info info="Eye Color" value="19BBY"></Info>
                    <GeneralInfo>Vehicles</GeneralInfo>
                    <Info >Snowspeeder</Info>
                    <Info >Imperial Speeder Bike</Info>
                </div>
            </div>
        )   
    }
}
    

export default Content;