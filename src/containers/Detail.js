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

class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
    
  }

  componentWillMount() {
    
  }

  componentDidMount(){
    
  }

  componentWillUnmount(){
    
  }

  componentWillReceiveProps(nextProps) {

  }

  handleSelect(selectedIndex, e) {
    //alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;
    return (
      <div className="detail-container">
        <NavigationBar />
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          {
            temsImg.map((item, index) => (
              <Carousel.Item key={`carousel-item-${index}`}>
                <img width={900} height={500} alt="900x500" src={item}/>
              </Carousel.Item>
            ))
          }
        </Carousel>
        <Panel className="bio-section">
          <h4>United States</h4>
          <h6>Verified <label className="c-gray">16 hrs ago</label></h6>
          <h6>Hi there</h6>
          <h6 className="follow-label">Instagram (17,956 followers)</h6>
          <div className="right-container">
            <h2>5<label><h6>CREDITS</h6><h6 className="c-gray"> / 50 chars</h6></label></h2>
          </div>
        </Panel>
        <div className="images-section">
          <Gallery photos={PHOTO_SET} />
        </div>
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
export default connect(mapStateToProps)(Detail);
