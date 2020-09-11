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
    paddingBottom: "15px"
}

const featureStyle = {
    /* Eye Color */

    // position: "absolute",
    left: "0%",
    right: "76.03%",
    top: "0%",
    bottom: "0%",

    /* Text/Light */

    color: "#828282",    
    background: "smokewhite",
    float: "left",
    width: "100%",

    paddinLeft: "16px",
    paddingTop: "14px",
    paadingBottom: "15px",
}

const valueStyle = {
    textAlign: "right",
    color: "#333333",
    float: "right",
    paddinRight: "16px",
    paddingTop: "14px",
    paadingBottom: "15px",
    width: "100%",
}

const InfoCell = (props) => { 
    
    if(props.children !== undefined){
        return (
            <div key={props.key} style={divStyle}>
                <span style={featureStyle}>{props.children}</span>
            </div>
        )      
    }else{
        return (
            <div key={props.key} style={divStyle}>
                <span style={featureStyle}>{props.info}</span>
                <span style={valueStyle}>{props.value}</span>
            </div>
        )
    }
}


export default InfoCell;