import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Toolbar } from './postToolbar';
import { Comments } from './postComments';
import VideoPost from './VideoPost';
import ImagePost from './ImagePost';

export default class OpenPost extends React.Component {

  render() {
    let item = this.props.item
    var dataLoad
    if (item.type === 'video') {
      dataLoad = <VideoPost item={item}/>
    } else {
      dataLoad = <ImagePost item={item}/>
    }
    return (
      <div>
        <Row>
          <Col md={12}>
            {dataLoad}
            <Toolbar likes_count={item.likes.count} comments_count={item.comments.count}/>
            {item.caption ? item.caption.text ? <Col md={12}>{item.caption.text}</Col> : <div />: <div />}
            <Comments comments={item.comments}/>
          </Col>
        </Row>
      </div>
    );
  }
}
