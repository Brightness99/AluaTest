import React from "react";
import { connect } from "react-redux";

import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';

class NavigationBar extends React.Component {

    constructor(props) {
      super(props);
 
      
    }
  
    componentWillMount() {
      
    }
  
    componentDidMount(){
      
    }
  
    componentWillUnmount(){
      
    }
  
    componentWillReceiveProps(nextProps) {
  
    }
  
    
    render() {
      return (
        <div className="navigation-bar">
          <Navbar>
            <Nav className="left-container">
              <NavItem eventKey={1} href="#">
                back
              </NavItem>
            </Nav>
            <div className="center-container">
              <a href="#home">ALUA</a>
            </div>
            <Nav className="right-container">
              <NavItem eventKey={1} href="#">
                forward
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      );
    }
  }
  
  // export the connected class
  function mapStateToProps(state) {
    return {
    };
  }
  export default connect(mapStateToProps)(NavigationBar);
  