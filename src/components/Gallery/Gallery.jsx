
import React from "react";
import HornedBeast from "../HornedBeast/HornedBeast.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Gallery(props) {
    return (
        <>
            <Container fluid>
                <Row>

                    {props.list.map((beast, index) => {
                        return <Col key={beast._id}>
                                    <HornedBeast

                                        title={beast.title}
                                        imageUrl={beast.image_url}
                                        description={beast.description}
                                        alt={beast.keyword}
                                        votes={beast.votes}
                                        handleVote={props.handleVote}
                                        
                                    />
                                  
                        </Col>
                    }
                    )}

                </Row>
            </Container>
        </>
    );
}

export default Gallery;