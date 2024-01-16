import React from 'react';
import "./flip.css"
import SecFlippy from "../flipcard/SecFlippy"
const Flippy = () => {
    return (
        <div style={{ border: '1px lightyellow ', padding: '10px',backgroundColor:"lightyellow" }}>
<div className='blogs'>
    <p className='blogspar'>Our blogs</p>
        <div className='total'>
            <div className="containers">
                <div className="cead">
                    <div className="front"></div>
                    <div className="back">
                        <p>New collectiom</p>
                        <p>Super stylish for men</p>

                    </div>

                </div>
            </div>

            <div className="containers1">
                <div className="cead1">
                    <div className="front1"></div>
                    <div className="back1">
                        <p>Imported shoes</p>
                        <p>50 % off</p>
                    </div>

                </div>
            </div>

            <div className="containers-2">
                <div className="cead-2">
                    <div className="front-2"></div>
                    <div className="back-2">
                        <p>custom shoes</p>
                        <p>For men</p>
                    </div>

                </div>


            </div>
        </div>
        <div>
            
        </div>
        </div>
        <div>
            <div>
        
        </div>
       <SecFlippy/>
        </div>
        
        </div>
    );
}

export default Flippy;