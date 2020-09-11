import React from 'react';

const itemStyle = {
    backgroundColor: "#FFFFFF",
    height:"69px",
    width:"349px",
    paddingLeft: "14.89px"
};

const hStyle = {
    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "17px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.0125em",

    color:"#333333",

    paddingTop: "16px"
    /*padding: "16px",
    margin:"0px",*/    
    
};

const pStyle = {
    fontSize: '15px',
    textAlign: 'center',

    /* Paragraph */

    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    /* identical to box height */

    display: "flex",
    alignItems: "center",
    letterSpacing: "0.0125em",

    /* Text/Light */

    color: "#828282",

    paddingBottom: "16px"
};


function ItemSideBar(props) {    
    return (
        <div className="" style={itemStyle}>
            <div className="" style={hStyle}>
                {props.name}
            </div>
            <div style={pStyle}>
                <span>{props.species !==null? props.species.name:"Human"}</span> {" from "} 
                <span>{props.homeworld.name}</span>
            </div>                         
        </div>
    )     
}
    

export default ItemSideBar;