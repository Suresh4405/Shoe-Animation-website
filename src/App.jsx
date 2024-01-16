import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardrecomp from './Card/Cardrecomp';
import Contentcomp from "./content/Contentcomp";
import Flippy from './flipcard/Flippy';
import emoji from "../src/assets/emoji.jpeg"

import slogo from "../src/assets/slogo.jpg"
import Contact from './Contact/Contact';
function App() {
  

  return (
    
     <div>
     <div className='toted'>
       <div className='roller'>
      <p className="slide1"><img src={emoji} className='imgemoji'></img>SALE LIVE UPTO - 60 % OFF</p>
         <div className="doc-1">
            <p className='nav1'>HOME</p>
            <p className='nav2'>ABOUT</p>
             <p className='nav3'>PRODUCT</p>
           <p className='nav4'>REVIEWS</p>
            <p className='nav5'>CONTACT</p>
           </div>
             <div>
                
             </div>
        </div>
        <div className='twic'>
          <img className='slogoimg' src={slogo}></img>
          <p className='slogpa'>Suresh Shoe's Mart </p>
        </div>
       
        </div> 
     


<Cardrecomp/>
<Contentcomp/>
<Flippy/>

<Contact/>



    </div>
  )
}

export default App