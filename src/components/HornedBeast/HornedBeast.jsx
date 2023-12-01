import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


function HornedBeast(props) {
    function vote() {
        props.handleVote(props.beast.title);
    }
    function handleClick(){
        props.handleSelectBeast(props.beast);
    }

    return (
        <>
            <Card style={{ width: '18rem', margin: '5px', borderStyle: 'groove', borderWidth: '2px', borderColor: 'blue' }}>
                <Card.Img onClick = {handleClick} variant="top" src={props.beast.image_url} alt={props.beast.keyword} />
                <Card.Body>
                    <Card.Title>{props.beast.title}</Card.Title>
                    <Card.Text>
                        {props.beast.description}
                    </Card.Text>
                    <Button onClick={vote} variant="primary">Like: {props.beast.votes}</Button>
                </Card.Body>
            </Card>
            

        </>

    )
}

export default HornedBeast;