import React from 'react';
import { Col} from 'react-bootstrap';
import VideoThumbnail from './VideoThumbnail';
import ImageThumbnail from './ImageThumbnail';

export default class FeedPost extends React.Component {

  constructor(props) {
    super(props);
    this.postClick = this.postClick.bind(this);
  }

  postClick(item){
    this.props.openPost(item);
  }

  render() {
    let item = this.props.item
    let post = null;
    if (item.type === "video") {
      post = <VideoThumbnail item={item}/>
    } else {
      post = <ImageThumbnail item={item}/>
    }
    return (
      <div>
        <Col xs={2} sm={3} md={3} onClick={() => { this.postClick(item) }} >
          {post}
        </Col>
      </div>
    );
  }
}
