import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from 'react-bootstrap';
import { getMembers, navigateTo } from '../actions';
import NavigationBar from '../components/NavigationBar';
import MemberListItem from '../components/MemberListItem';

type Props = {
  dispatch: () => {},
  member: {}
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

  componentDidMount(){
    const { dispatch } = this.props;
    const { offset } = this.state;
    dispatch(getMembers(offset));
  }

  componentWillReceiveProps(nextProps) {
    const { member, nav } = nextProps;
    const { member: prevMember } = this.props;
    if (prevMember !== member && !member.isRunning && member.isLoaded) {
      this.setState({
        members: member.member.data
      }, () => {
        const y = nav.member.scroll;
        window.scroll({
          top: y,
          behavior: 'smooth'
        });
      })
    }
  }

  itemClickHandler(item) {
    const { dispatch } = this.props;
    const navInfo = {
      from: '/home',
      to: '/detail',
      scroll: window.pageYOffset,
      params: item,
    }
    dispatch(navigateTo(navInfo));
  } 

  render() {
    const { members, offset } = this.state;
    const memberList = members.map((item, index) => (
      <MemberListItem key={`member-item-${offset}-${index}`} info={item} onClick={() => this.itemClickHandler(item)}/>
    ));
    return (
      <div className="home-container">
        <NavigationBar />
        {memberList}
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  console.log('home state ====>', state);
  return {
    member: state.member,
    nav: state.nav
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
