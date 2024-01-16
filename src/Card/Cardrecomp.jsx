import React from 'react';
import Cardbootstrap from "../Card/Cardbootstrap"
import shoe1 from "../assets/shoe1.jpg"
import shoe2 from "../assets/shoe2.jpg"
import shoe3 from "../assets/shoe3.jpg"
import shoe4 from "../assets/shoe4.jpg"
import che1 from "../assets/che1.jpg"
import che2 from "../assets/che2.jpg"
import che3 from "../assets/che3.jpg"
import che4 from "../assets/che4.jpg"
import "./card.css"

const Cardrecomp = () => {
    const data=[
        {
                id:29,
                image:shoe1,
                Card:"Sparx Mens Sx0675gRunning Shoe",
                description:"MADE OF: quality Mesh as upper material and EVA as sole material.",
                price:788,
        },
            {
                id:30,
                image:shoe2,
                Card:"Campus Men's North Plus Running Shoes",
                description:"These shoes for men have a supportive design",
                price:"1,099",
            },
            {
                id:31,
                image:shoe3,
                Card:"Bersache Lightweight Sports Shoes ",
                description:"Modern, Breathable Sports Shoes  ideal for all season",
                price:881,
            },
            {
                id:32,
                image:shoe4,
                Card:"Symbol Mens Carlos Formal Shoes",
                description:"Designed with high quality material and durable outsole ",
                price:"1299",
            },
            {
                id:33,
                image:che1,
                Card:" Sandals Red Tape's",
                description:"Red Tape Men's Rover Comfortable Clogs with Adjustable Back Strap",
                price:899,
            },
            {
                id:34,
                image:che2,
                Card:"Crogs",
                description:"Aqualite Super Comfortable Anti-Skid Clogs For Mens",
                price:749,
            },
            {
                id:35,
                image:che3,
                Card:"Orthopaedic Slipper",
                description:"DOCTOR EXTRA SOFT Slipper Care Orthopaedic and Diabetic Slipper",
                price:399,
            },
            {
                id:36,
                image:che4,
                Card:"PARAGON Sandals",
                description:"PARAGON PUK2217G Men Stylish Sandals Casual Athletic Sandals ",
                price:567,
            }
    ]
    return (
        <div style={{ border: '1px', padding: '10px' ,backgroundColor:'lightyellow'}}>
            <div>
            <div className="Top-color">
             <div className="Back-img">
              <p className="Para1">ANNIVERSARY <br></br> SALE </p>

            </div>
       </div>
            </div>
      <div className='csds'>
        <div className="mediam">
            <div className="smalle">
            <div className='row'>
                {data.map((dd,i)=>(
                    <div key={i} className='col-3'>

                               <Cardbootstrap 
                               carimg={dd.image}
                               cartitle={dd.Card}
                               cardescr={dd.description}
                               carprice={dd.price}/> 
                    </div>

                ))}
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Cardrecomp;