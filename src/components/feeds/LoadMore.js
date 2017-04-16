import React from 'react';
import FontAwesome from'react-fontawesome';

export default class LoadMore extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this)
  }

  next() {
    this.props.paginateNext();
  }

  render() {
    return (
      <div>
        <span className="not-active" onClick={() => {this.next()}}>
          Load More
          <FontAwesome name='chevron-right'/>
        </span>
      </div>
    );
  }
}
