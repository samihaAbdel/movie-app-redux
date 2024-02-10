import React from 'react';
import {Card, Button} from "react-bootstrap";

export default function CardMovie({movie}) {
  return (
    
    <div>
      <Card style={{ width: '18rem', height:'50rem', margin:'5%'}}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.description}        
        </Card.Text>
        <hr/>
        <Button variant="primary">Description</Button>
      </Card.Body>
    </Card>

    </div>
  )
}
