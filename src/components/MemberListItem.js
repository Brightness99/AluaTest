import React from "react";
import classnames from 'classnames';
import {
  Button,
  Image,
  Panel,
  Row,
  Col
} from 'react-bootstrap';

type Props = {
  className: string,
  info: {
    ig_url: string,
    display_name: string,
    title: string,
    is_online: boolean,
    city: string,
    country: string
  }
}

class MemberListItem extends React.Component {
  props: Props;

  render() {
    const { className, info } = this.props;
    const last_online = '6 hours';
    return (
      <div className={classnames('member-list-item', className)}>
        <Panel>
          <Image src={info.ig_url}   responsive />
          <div className="mid-info">
            <h4>{info.display_name}</h4>
            <h5>{info.title}</h5>
          </div>
          <Row className="bot-info show-grid">
            <Col xs={6} md={6}>
              <h6>{`${info.city}, ${info.country}`}</h6>
            </Col>
            <Col xs={6} md={6}>
              {
                info.is_online ?
                  <h6><label className="online-icon"></label>Online</h6> :
                  <h6>{last_online}</h6>
              }
            </Col>
          </Row>
        </Panel>
      </div>
    );
  }
}

export default MemberListItem;