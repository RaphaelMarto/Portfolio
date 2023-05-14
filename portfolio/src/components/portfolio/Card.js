import React, { useState } from 'react';
import { Card} from 'react-bootstrap';

const MyCard = (props) => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <Card className={`custom-card ${props.className}`}>
    <div className="d-flex flex-wrap">
      <div className="w-40 center">
         <Card.Img src={props.imageSrc} alt="Card image" className="h-100" />
      </div>
      <div className="w-40">
        <Card.Body className='flex-container'>
          <p>
            <span>{props.nom}</span>
            <span  className="ml-auto">{props.theme}</span>
          </p>
          <p>
            <span>Heures réel: {props.done} </span>
            <span  className="ml-auto">Heures validé: {props.valid}</span>
          </p>
          <p>{props.desc}</p>
        </Card.Body>
      </div>
    </div>
  </Card>
  );
};

export default MyCard;
