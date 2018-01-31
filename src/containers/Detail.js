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

const temsImg = [
  'https://cdn.shopify.com/s/files/1/0691/5403/products/dashboard-screenshot_1024x1024.jpg?v=1439064271',
  'https://cdn.shopify.com/s/files/1/0691/5403/products/dashboard-screenshot_1024x1024.jpg?v=1439064271',
  'https://cdn.shopify.com/s/files/1/0691/5403/products/dashboard-screenshot_1024x1024.jpg?v=1439064271'
];

const PHOTO_SET = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 1, height: 1 },
];

type Props = {
  nav: {
    member: {}
  }
}

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

  componentWillMount() {
  }

  componentDidMount(){
    this.setState({ member: this.props.nav.member.params });
    window.scroll(0, 0);
  }

  componentWillUnmount(){
    
  }

  componentWillReceiveProps(nextProps) {
    const { nav } = nextProps;
    console.log('====', nextProps);
    // if (nav.member) {
    //   this.setState({ member: nav.member.params });
    // }
  }

  handleSelect(selectedIndex, e) {
    //alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  backHandler() {
    const { dispatch } = this.props;
    const navInfo = {
      from: '/detail',
      to: '/home',
    }
    dispatch(backTo(navInfo));
  }

  render() {
    const { index, direction, member } = this.state;
    console.log('member ===>', member);
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
      renderMark = 
      (
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

// export the connected class
function mapStateToProps(state) {
  console.log('state ===>', state);
  return {
    nav: state.nav
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
