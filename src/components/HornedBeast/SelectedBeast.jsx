import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HornedBeast(props){
    return (
        <Modal
                onHide= {props.handleClose}
                show = {props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title  className="text-center w-100" id="contained-modal-title-vcenter">
                        {props.beast.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column justify-content-center text-center">
                    <img  src={props.beast.image_url} alt={props.beast.keyword} />
                    <p>
                        {props.beast.description}
                    </p>
                    <p>Horns: {props.beast.horns}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
    )
}

export default HornedBeast;