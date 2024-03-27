import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './firstdiv.css';
import IMAGES from '../../Images/Image';

function Firstdiv() {
  return (
     <section className='mainContainer'> 

        <div className="leftContent">
                <div className='upperContant'>
                     <p  className='headings'>Digital</p>
                     <p  className='headings'>marketing that</p>
                     <p  className='headings'>drives revenue</p>
      
                     <p className='bottum-headings'>It’s your turn to shine when we put the spotlight on your brand.<br/> We help get the attention and revenues your business deserves in <br/>the digital world.</p>
      
                    <div className="card leftCard">
                        <div className="card-body">
                          <input type="text" placeholder='Email' id='emailinput'/>
                          <button type="button" className="btn btn-dark cardbtn">Next</button>
                        </div>
                    </div>
      
                </div>
         </div>
     
     <div className="rightContent">
            <div className="rightimgbox">
                 <img src={IMAGES.img1} className='img1' alt="" />      
            </div>
             <div className="secondimg">
             <img src={IMAGES.img2}  className= 'img2' alt="" />
             <img src={IMAGES.img3}  className='img3' alt="" />
             </div>

            
     </div>
     </section>
  
  )
}

export default Firstdiv