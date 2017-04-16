import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import { Toolbar } from '../openItem/postToolbar.js';

export default class ImageThumbnail extends React.Component {

  render() {
    let item = this.props.item
    return (
      <div>
        <Thumbnail src={item.images.thumbnail.url}>
          <Toolbar likes_count={item.likes.count} comments_count={item.comments.count}/>
        </Thumbnail>
      </div>
    );
  }
}
