import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
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
    this.fetchData = this.fetchData.bind(this);
    this.itemClickHandler = this.itemClickHandler.bind(this);
    this.state = {
      offset: 0,
      endpoint: '/v1/users/discover?offset=0&limit=20',
      next: '',
      scrollY: 0,
      members: []
    };
  }

  props: Props;

  componentDidMount(){
    
    const prevState = JSON.parse(localStorage.getItem( 'homeState' )) || null;
    if (prevState === null) {
      const { dispatch } = this.props;
      const { endpoint } = this.state;
      dispatch(getMembers(endpoint));
    } else {
      const { scrollY } = prevState;
      this.setState({ ...prevState }, () => {
        window.scroll({
          top: scrollY,
          behavior: 'smooth'
        });
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { member } = nextProps;
    const { member: prevMember } = this.props;
    if (prevMember !== member && !member.isRunning && member.isLoaded) {
      const { members } = this.state;
      const newMembers = members.concat(member.member.data);
      this.setState({
        members: newMembers,
        next: member.member.next
      });
    }
  }

  itemClickHandler(item) {
    const { dispatch } = this.props;
    const navInfo = {
      from: '/home',
      to: '/detail',
      params: item,
    }
    this.setState({ scrollY: window.pageYOffset }, () => {
      dispatch(navigateTo(navInfo));
      localStorage.setItem('homeState', JSON.stringify(this.state));
    });
  }
  
  refresh() {}

  fetchData() {
    const { dispatch } = this.props;
    const { next } = this.state;
    if (next) {
      dispatch(getMembers(next));
    }
  }

  render() {
    const { members, next } = this.state;
    const memberList = members.map((item, index) => (
      <MemberListItem key={`member-item-${next}-${index}`} info={item} onClick={() => this.itemClickHandler(item)}/>
    ));
    return (
      <div className="home-container">
        <NavigationBar />
        <InfiniteScroll
          refreshFunction={this.refresh}
          next={() => this.fetchData()}
          hasMore={true}
          // loader={<h5 style={{textAlign: 'center'}}>Loading ...</h5>}
          loader={<h5 style={{textAlign: 'center'}}><Glyphicon glyph="glyphicon glyphicon-repeat glyphicon-refresh-animate" /></h5> }
          endMessage={
            <p style={{textAlign: 'center'}}>
              <b>Yay! You have seen it all</b>
            </p>
          }>
          {memberList}
        </InfiniteScroll>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    member: state.member
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
