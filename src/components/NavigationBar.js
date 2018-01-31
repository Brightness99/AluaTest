import React from "react";
import { connect } from "react-redux";
import { browserHistory } from 'react-router';

import {
  Navbar,
  Nav,
  NavItem,
  
  Glyphicon
} from 'react-bootstrap';

type Props = {
  navInfo: {
    title: {
      name: '',
      username: ''
    },
    right: null,
  }
}
class NavigationBar extends React.Component {

    constructor(props) {
      super(props);
    }

    props: Props;
  
    componentWillMount() {
      
    }
  
    componentDidMount(){
      
    }
  
    componentWillUnmount(){
      
    }
  
    componentWillReceiveProps(nextProps) {
  
    }
  
    
    render() {
      const { navInfo } = this.props;
      let backButton = null;
      let title = null;
      if (navInfo) {
        backButton = (
          <NavItem onClick={browserHistory.goBack}>
            <Glyphicon glyph="glyphicon glyphicon-menu-left" />
          </NavItem>
        );
        title = (
          <div className="center-container">
            <h6>{navInfo.title.name}</h6>
            <h6>{navInfo.title.username}</h6>
          </div>
        );
      } else {
        title = (
          <div className="center-container">
            <h4>ALUA</h4>
          </div>
        )
      }
      return (
        <div className="navigation-bar">
          <Navbar>
            <Nav className="left-container">
              {backButton}
            </Nav>
            {title}
            <Nav className="right-container">
              
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
  