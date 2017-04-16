import React from 'react';

var FontAwesome = require('react-fontawesome');

export class Toolbar extends React.Component {

  render() {
    let likes = this.props.likes_count
    let comments = this.props.comments_count
    return (
      <div className="toolbar">
        <FontAwesome className="toolbar-icon" name='heart' />
        <span className="toolbar-count">{likes}</span>
        <FontAwesome className="toolbar-icon" name='comment' />
        <span className="toolbar-count">{comments}</span>
      </div>
    );
  }
}