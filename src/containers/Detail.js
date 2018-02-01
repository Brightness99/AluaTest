import React from "react";
import { connect } from "react-redux";
import {
  Navbar,
  Nav,
  NavItem,
  Carousel,
  Panel
} from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import { backTo } from '../actions';

import NavigationBar from '../components/NavigationBar';

type Props = {
  nav: {
    member: {}
  }
};
//const temp = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71V-yogU1_HYrFkRwEemFB3C6vayK9IBfXri2UBMIoSPZalcoYA';
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null,
      member: null
    };
  }

  props: Props;

  componentDidMount(){
    this.setState({ member: this.props.nav.member.params });
    window.scroll(0, 0);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  backHandler() {
    window.location.href = '#/home';
  }

  render() {
    const { index, direction, member } = this.state;
    let navInfo = null;
    let avatars = [];
    let gallery = [];
    let renderMark = null;
    if (member) {
      navInfo = {
        title:{
          name: member.display_name,
          username: member.username
        },
        right: null
      };
      member.featured.map((item, index) => {
        avatars.push(item.rt)
        gallery.push({ src: item.rt, width: 1, height: 1 });
      });
      renderMark = (
        <div className="detail-container">
          <NavigationBar navInfo={navInfo} back={() => this.backHandler()}/>
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            {
              avatars.map((item, index) => (
                <Carousel.Item key={`carousel-item-${index}`}>
                  <img width={900} height={500} alt="900x500" src={item}/>
                </Carousel.Item>
              ))
            }
          </Carousel>
          <Panel className="bio-section">
            <h4>{member.country}</h4>
            <h6>{member.id_verified ? Verified : null}<label className="c-gray"> 16 hrs ago</label></h6>
            <h6>{member.bio}</h6>
            <h6 className="follow-label">Instagram (17,956 followers)</h6>
            <div className="right-container">
              <h2>{member.credit_rate}<label><h6>CREDITS</h6><h6 className="c-gray"> / {member.chars_per_msg} chars</h6></label></h2>
            </div>
          </Panel>
          <div className="images-section">
            <Gallery photos={gallery} />
          </div>
        </div>
      );
    }
    return renderMark;
  }
}

function mapStateToProps(state) {
  console.log('state ===>', state);
  return {
    nav: state.nav
  };
}

export default connect(mapStateToProps)(Detail);
