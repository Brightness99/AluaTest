import React from "react";
import { connect } from "react-redux";


class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    
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
      <div className="page-home">

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
