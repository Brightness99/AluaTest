import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from 'react-bootstrap';
import { getMembers } from '../actions';
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
  member: {

  }
};

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      members: []
    }
    
  }

  props: Props;

  componentWillMount() {
    
  }

  componentDidMount(){
    const { dispatch } = this.props;
    const { offset } = this.state;
    dispatch(getMembers(offset));
  }

  componentWillUnmount(){
    
  }

  componentWillReceiveProps(nextProps) {
    const { member } = nextProps;
    const { member: prevMember } = this.props;
    if (prevMember !== member && !member.isRunning && member.isLoaded) {
      this.setState({
        members: member.member.data
      })
    }
  }

  render() {
    const { members, offset } = this.state;
    const memberList = members.map((item, index) => (
      <MemberListItem key={`member-item-${offset}-${index}`} info={item}/>
    ));
    return (
      <div className="home-container">
        {memberList}
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  console.log('state ===>', state);
  return {
    member: state.member
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
