import React from 'react';
import { Image } from 'react-bootstrap';

export default class ImagePost extends React.Component {
  render() {
    let item = this.props.item
    return (
      <div>
        <Image responsive={true} src={item.images.standard_resolution.url}/>
      </div>
    );
  }
}
