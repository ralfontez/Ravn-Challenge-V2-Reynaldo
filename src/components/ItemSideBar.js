import React from 'react';

const itemStyle = {
    backgroundColor: "#FFFFFF",
    height:"69px",
    width:"349px",
    paddingLeft: "14.89px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
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
    
};

const pStyle = {

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
                <p style={{padding: "0px", margin: "0px"}}><span>{props.species !==null? props.species.name:"Human"}</span> {` from ` }
                <span>{props.homeworld.name}</span></p>
            </div>                         
        </div>
    )     
}
    

export default ItemSideBar;