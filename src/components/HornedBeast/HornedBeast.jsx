import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function HornedBeast(props) {

    const [vote, setVote] = useState(0);

    function increment() {
        setVote(vote + 1)
    }

    return (
        <>
            <Card style={{ width: '18rem', margin: '5px', borderStyle: 'groove', borderWidth: '2px', borderColor: 'blue'}}>
                <Card.Img variant="top" src={props.imageUrl} alt= {props.keyword}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                    <Button onClick={increment} variant="primary">Like: {vote}</Button>
                </Card.Body>
            </Card>
        </>

    )
}

export default HornedBeast;