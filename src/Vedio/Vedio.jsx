import React from 'react';
import "./vedio.css"
import shoeve from "../assets/shoeve.mp4"
const Vedio = () => {
    return (
      <div style={{ border: '1px', padding: '10px' ,backgroundColor:'lightyellow'}}>
        <div className='txy'>
      <video width="750" height="550" autoPlay muted loop>
        <source src={shoeve} type="video/mp4" />
      
      </video>
      </div>
      </div>
    );
}

export default Vedio;