import React from 'react';
import "./content.css"
import comfort from "../assets/comfort.png"
import Vedio from '../Vedio/Vedio';
const Content = () => {
    return (
        
        <div className="content-1">
            <p className="Para2">Why choose us?</p>
            <p className='para3'>Suresh mart is bringing to life, fashion that is both stylish and responsible. With innovative planet-friendly </p>
            <p className='para4'>materials and always-in-style trendy designs, we deliver access to a never-before-experienced comfort with our</p> 
            <p className='para5'>products while striking the right balance with your lifestyle quotient.</p>
            <img className='comfortimg' src={comfort}></img>
            <div>
                <Vedio/>
            </div>
        </div>
    );
}

export default Content;