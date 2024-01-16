import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.css"
const Cardbootstrap = (props) => {
    return (
        <div className='Cardalign'>
             <Card style={{ width: '18rem' }}>
      <Card.Img className='carimgs' src={props.carimg} />
      <Card.Body>
        <Card.Title>{props.cartitle}</Card.Title>
        <Card.Text>
          {props.cardescr}
        </Card.Text>
        <Button variant="primary">PRICE : {props.carprice}</Button>
      </Card.Body>
    </Card>
        </div>
    );
}

export default Cardbootstrap;