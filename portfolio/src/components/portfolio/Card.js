import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = (props) => {
  return (
    <Card className={`custom-card ${props.className}`}>
      <div className="d-flex flex-wrap">
        <Card.Img src={props.imageSrc} alt="Card image" className="picture-size" />
        <div className="d-flex flex-wrap flex-grow-1">
          <Card.Body className='flex-container d-flex flex-column'>
           
              <p>
                <span><i>{props.nom}</i></span>
                <span className="ml-auto">{props.theme}</span>
              </p>
              <p>
                <span>Heures réel: <span className='big2'>{props.done}</span></span>
                <span className="ml-auto">Heures validé: <span className='big2'>{props.valid}</span></span>
              </p>
      
            <p className="description">{props.desc}</p>
            <p>Plus d'image: {props.preuve}</p>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default MyCard;
