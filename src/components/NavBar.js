import React from 'react';
//import { Nav, NavItem, NavLink } from 'reactstrap';

const divStyle = {
  position: "absolute",
  width: "1440px",
  height: "52px",
  left: "0px",
  top: "0px",

  /* Ravn Black */

  background: "#121212",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",

}

const spanStyle = {
  position: "absolute",
  width: "191px",
  height: "20px",
  left: "33px",
  top: "16px",

  /* Header */

  fontFamily: "SF Pro Display",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "17px",
  lineHeight: "20px",
  display: "flex",
  alignItems: "center",
  letterSpacing: "0.0125em",

  /* Gray 6 */

  color: "#F2F2F2",
}

const NavBar = (props) => {
  return (
    <div className="Box" style={divStyle}>
      <span style={spanStyle}>Ravn Star Wars Registry</span>      
    </div>
  );
}

export default NavBar;