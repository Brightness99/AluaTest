import React from "react";
import { Link } from "react-router";
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
    avatar: string,
    display_name: string,
    title: string,
    is_online: boolean,
    city: string,
    country: string
  },
  onClick: () => {}
}

class MemberListItem extends React.Component {
  props: Props;

  render() {
    const { className, info, onClick } = this.props;
    const last_online = '6 hours';
    
    return (
      <Link className={classnames('member-list-item', className)} href="#/detail">
        <Panel onClick={() => onClick()}>
          <Image src={info.avatar.rt} responsive />
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
      </Link>
    );
  }
}

export default MemberListItem;