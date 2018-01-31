import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from 'react-bootstrap';
import { MemberActions } from '../actions';
import MemberListItem from '../components/MemberListItem';

const info = {
  ig_url: 'https://cdn.shopify.com/s/files/1/0691/5403/products/dashboard-screenshot_1024x1024.jpg?v=1439064271',
  display_name: 'brite night',
  title: 'model',
  is_online: true,
  city: 'San Jose',
  country: 'Unite State'
}

type Props = {
  dispatch: () => {},
};

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    
  }

  props: Props;

  componentWillMount() {
    
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(MemberActions.getMembers());
  }

  componentWillUnmount(){
    
  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    return (
      <div className="page-home">
        <MemberListItem info={info}/>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  console.log('state ===>', state);
  return {
    
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
