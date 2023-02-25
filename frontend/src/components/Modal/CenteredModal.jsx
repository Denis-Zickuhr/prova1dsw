import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Resultados</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Livros</h4>
        <p>
          {props.text.map((book, index) => {
            return <p> {index+1} - {book.title}</p>
          })}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CenteredModal;
