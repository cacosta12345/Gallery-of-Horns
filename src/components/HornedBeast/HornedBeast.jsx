import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


function HornedBeast(props) {
    const [modalShow, setModalShow] = React.useState(false);
    function vote() {
        props.handleVote(props.title);
    }

    return (
        <>
            <Card style={{ width: '18rem', margin: '5px', borderStyle: 'groove', borderWidth: '2px', borderColor: 'blue' }}>
                <Card.Img onClick={() => setModalShow(true)} variant="top" src={props.imageUrl} alt={props.keyword} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button onClick={vote} variant="primary">Like: {props.votes}</Button>
                </Card.Body>
            </Card>
            <Modal
                {...props}
                onHide= {() => setModalShow(false)}
                show = {modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title  className="text-center w-100" id="contained-modal-title-vcenter">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column justify-content-center text-center">
                    <img  src={props.imageUrl} alt={props.keyword} />
                    <p>
                        {props.description}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

        </>

    )
}

export default HornedBeast;