import React from 'react'
import IMAGES from '../../Images/Image'
import './seconddiv.css'

function Seconddiv() {
  return (
     <div className="secondcontainer">
      <div className="submainsec">  
      <div className='secparagraph'>
            <p>A PARTNER, NOT </p>
            <p>A VENDOR</p>
        </div>
          <div className="imgboxsec">

          <img src={IMAGES.img4} className='img' alt="" />
        <img src={IMAGES.img5}   className='img' alt="" />
        <img src={IMAGES.img6}   className='img' alt="" />
        <img src={IMAGES.img7}   className='img' alt="" />
        <img src={IMAGES.img8}   className='img' alt="" />
          </div>
      </div>
        
     </div>
  )
}

export default Seconddiv