import React from 'react';

const divStyle = {
    /* Header */

    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "17px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.0125em",

    /* Text/Light */

    color: "#828282",

    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    marginLeft: "16px",
}

const featureStyle = {
    

    /* Header */

    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "17px",
    lineHeight: "20px",
    display: "flex",
    /*alignItems: "center",*/
    letterSpacing: "0.0125em",

    /* Text/Light */

    color: "#828282",
    
    
}

const valueStyle = {
     
    /* Header */

    fontFamily: "SF Pro Display",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "17px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    /*textAlign: "right",*/
    letterSpacing: "0.0125em",

    color: "#333333",
    float: "right"
}


const InfoCell = (props) => { 
    
    if(props.children !== undefined){
        return (
            <div key={props.key} className="" style={divStyle}>
                <span style={featureStyle}>{props.children}</span>
            </div>
        )  
          
    }else{
        return (
            <div key={props.key} className="" style={divStyle}>
                <span style={featureStyle}>{props.info}</span>
                <span style={valueStyle}>{props.value}</span>
            </div>
        ) 
    }
     
}
    

export default InfoCell;