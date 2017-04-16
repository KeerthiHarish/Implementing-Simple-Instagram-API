import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import { Toolbar } from '../openItem/postToolbar.js';

import  FontAwesome  from 'react-fontawesome';


export default class VideoThumnail extends React.Component {

  render() {
    let item = this.props.item
    return (
      <div>
        <FontAwesome className="video-icon" name='play' />
        <Thumbnail className="video-thumbnail" src={item.images.thumbnail.url}>
          <Toolbar likes_count={item.likes.count} comments_count={item.comments.count}/>
        </Thumbnail>
      </div>
    );
  }
}
