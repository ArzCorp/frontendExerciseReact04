import React from 'react';
import './css/Service.css';

const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="service__card">
          <img src="https://i.ibb.co/B4ntJYm/hands.png" alt="cardImage" />
          <h2 className="color-secondary">Consultoria</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className="service__card">
          <img src="https://i.ibb.co/dBYtsHt/plant.png" alt="cardImage" />
          <h2 className="color-green">Formacion</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className="service__card">
          <img src="https://i.ibb.co/4Ts6Wt2/analysis.png" alt="cardImage" />
          <h2 className="color-yellow">Analisis</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className="service__card">
          <img src="https://i.ibb.co/16kxH7G/clock.png" alt="cardImage" />
          <h2 className="color-principal">investigacion</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default Service;