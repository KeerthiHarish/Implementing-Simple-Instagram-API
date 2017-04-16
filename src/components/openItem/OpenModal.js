import React from 'react';
import { Modal } from 'react-bootstrap';
import OpenPost from './OpenPost';

export default class OpenModal extends React.Component {

  render() {
    let item = this.props.current_item
    var dataLoad
    if (item === '') {
      dataLoad = <div>Select A Post</div>
    } else {
      dataLoad = <OpenPost item={item}/>
    }
    return (
      <div className="feed-grid padd-left">
        <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header closeButton>
            Selected Post
          </Modal.Header>
          <Modal.Body>
            {dataLoad}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
