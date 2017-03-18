import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PrintContainer from '../containers/PrintContainer.js'

class PrintModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.close = ()=> this.setState({ showModal: false});
    this.open = ()=> this.setState({ showModal: true});
    this.print = ()=> window.print();
  }

  render(){
    return (
      <div>
        <Button onClick={this.open}>Print Character Sheet</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Character Sheet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PrintContainer />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.print}>Print</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default PrintModal;
