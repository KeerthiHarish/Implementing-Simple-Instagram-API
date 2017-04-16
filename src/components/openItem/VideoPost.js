import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

export default class VideoPost extends React.Component {
  render() {
    let item = this.props.item
    return (
      <div>
        <Video autoPlay loop muted
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
          poster={item.images.standard_resolution.url}
          >
          <source src={item.videos.standard_resolution.url} type="video/mp4" />
        </Video>
      </div>
    );
  }
}
