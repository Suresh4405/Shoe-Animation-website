import React from 'react';
import "./contact.css"
import social from "../assets/socil.png"
const Contact = () => {
    return (
        <div>
            <div className='lastr'>
                <p className='leed1'>Our page has come to an end, but our</p> 
                <p className='leed'>relationship with you has not.</p>
                <p className='leed2'>STAY SUSTAINABLE AND SUBSCRIBE NOW</p>
                <input className='leed3' placeholder='Enter your Email address'></input>
                <button className='leed4'>SUBSCRIBE</button>
                <div>
                    <p className='leed5'></p>
                    <img className='imgsoc' src={social}></img>
                    <p className='leed6'>CONTACT US -<br></br>
                WhatsApp: +91 6379341607<br></br>
                (9:30AM to 6:30PM on Weekdays)</p>

                </div>
            </div>

        </div>
    );
}

export default Contact;