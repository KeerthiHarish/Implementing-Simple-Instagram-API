import React from 'react';
import { Row, Col} from 'react-bootstrap';
import LoadMore from './LoadMore'
import FeedPost from './FeedPost'

export default class FeedGrid extends React.Component {

  _handlerChange = (event) => {
    if(event.key === 'Enter' ||  event.keyCode === 13) {
      this.props.searchUser(event.target.value);
    }
  }

  render() {
    let items = this.props.items;
    let posts = [];
    let paginateNext = this.props.paginateNext
    let openPost = this.props.openPost;

    posts = items.map(function(item) {
      return <FeedPost item={item} key={item.id} openPost={openPost}/>;
    }, this);

    return (
      <div>
        <Row>
          <Col md={5}>
            <input type="text" onKeyPress={this._handlerChange.bind(this)} defaultValue={this.props.username} />
          </Col>
          <Col md={4}>
            <p>Feed</p>
          </Col>
          <Col className="controls" md={3}>
            <LoadMore paginateNext={paginateNext} />
          </Col>
        </Row>
        <Row className="feed-grid padd-right">
          {posts}
        </Row>
      </div>
    );
  }
}
