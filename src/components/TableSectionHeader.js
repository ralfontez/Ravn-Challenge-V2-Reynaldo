import React, {Component} from 'react';

const divStyle = {
    /* Header */

    fontFamily: "SFProDisplay",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "17px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.0125em",

    /* Text/Dark */

    color: "#333333",

    paddingTop: "32px",
    paddingLeft: "16px",
    paddingBottom: "8px"
}

class TableSectionHeader extends Component{
    render(){
        return (
        <div className="" style={divStyle}>{this.props.children}</div>
        )   
    }
}
    

export default TableSectionHeader;