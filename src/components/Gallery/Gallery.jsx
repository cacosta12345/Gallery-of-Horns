
import React from "react";
import { useState } from "react";
import HornedBeast from "../HornedBeast/HornedBeast.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormRange from 'react-bootstrap/FormRange'



function Gallery(props) {
    const [hornFilter, setHornFilter] = useState(1);
    const [beasts, setBeasts] = useState(props.list)
    

    function onChange(e){
        setHornFilter(e.target.value);
        console.log(e.target.value);
        let target = e.target.value;
        setBeasts(props.list.filter(beast=>target<= beast.horns))

    }


    React.useEffect(()=>{console.log(beasts)}, [beasts]);
    return (
        <>
            <Form.Label className="my-3 fw-bold text-center d-block">Filter by # of horns!</Form.Label>
            <Form.Range className= 'mb-4 w-75 mx-auto d-block ' value = {hornFilter} min="1" max="4" step="1" onChange={onChange}/>
            <Container fluid>
                <Row>
                    {beasts.map((beast, index) => {
                        return <Col key={beast._id}>
                            <HornedBeast
                                
                                title={beast.title}
                                imageUrl={beast.image_url}
                                description={beast.description}
                                alt={beast.keyword}
                                votes={beast.votes}
                                handleVote={props.handleVote}
                                handleSelectBeast={props.handleSelectBeast}
                                beast={beast}
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