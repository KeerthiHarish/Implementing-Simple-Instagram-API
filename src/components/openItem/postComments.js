import React from 'react';
import { Image, Row, Col } from 'react-bootstrap'

export class Comments extends React.Component {
  render() {
  	let comments = this.props.comments.data
  	if (this.props.comments.count === 0){
  			return <div>This post has no comments</div>
  	} else {
  		var items = comments.map(function(comment) {
      	return <Comment comment={comment} key={comment.id}/>;
    	});
  	}
    return (
      <div>
      	<p>Recent comments:</p>
      	{items}
      </div>
    );
  }
}


class Comment extends React.Component {
  render() {
  	let comment = this.props.comment
  	let name = null
  	if (comment.from.full_name === '') {
  		name = comment.from.username
  	} else {
  		name = comment.from.full_name
  	}
    return (
      <div>
      	<Row>
	      	<Col md={2}>
	      		<Image responsive={true} src={comment.from.profile_picture}/>
	      	</Col>
	      	<Col md={10}>
	      		<span>{name}</span>
	      		<br/>
	      		<span>{comment.text}</span>
	      	</Col>
      	</Row>
      	<br/>
      </div>
    );
  }
}
