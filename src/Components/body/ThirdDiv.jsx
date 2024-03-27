import React from 'react'
 import './thirddiv.css';
import IMAGES from '../../Images/Image';
function ThirdDiv() {
  return (
    <section className='main'>

        <div className='upperpart'>  
                <div className="leftpart">
                    <p>WHAT WE DO</p>
                    <p className='boldpara'>Driving a better way of<br/> doing marketing</p>
                </div>
                <div className="rightpart">
                   <p className='righttext'>We deliver business impact through PR & marketing with a combination <br /> of intellectual curiosity, industry experience, urgency, and precision.</p>

                   <a href="" className='linkbtn'>VIEW ALL SOLUTIONS</a>
                </div>

        </div>

        <div  className='buttompart'>
              <div className='innerpart'>
                  <div   className='firstbtn'>
                    <p className='btntext'>search engine <br />
                      optimization
                    </p>
                    <span className='arrow'><i class="fa-solid fa-arrow-right"  id="arrowimg"></i></span>
                  </div>
                  <div className='textContent'>
                   <h3>Paid search  <br />marketing</h3>
                   <h3>Conversion rate <br /> optimization</h3>
                   <h3>Social media <br/>marketing</h3>

                  </div>
                 <div className="overpart">
                    <div className="rightpara">
                      <p className='upperpara'>Increase your organic traffic by ranking <br /> high on search engines and AI <br /> discovery tools like ChatGPT </p>

                      <div className="tickpara">
                        <span> <i class="fa-solid fa-check"></i></span>
                        <p>Keyword and competitor research</p>
                      </div>
                      
                      <div className="tickpara">
                        <span> <i class="fa-solid fa-check"></i></span>
                        <p>SKAGS (single keyword ad groups)</p>
                      </div>

                      
                      <div className="tickpara">
                        <span> <i class="fa-solid fa-check"></i></span>
                        <p>Negative keyword pruning</p>
                      </div>

                      
                      <div className="tickpara">
                        <span> <i class="fa-solid fa-check"></i></span>
                        <p>Ad copy optimization</p>
                      </div>

                      
                      <div className="tickpara">
                        <span> <i class="fa-solid fa-check"></i></span>
                        <p>Backlink Generation</p>
                      </div>
                    </div>
                    <div>
                      <img  className='img9'src={IMAGES.img9} alt="" />
                   </div>
                 </div>
              </div>

            
        </div>
    </section>
  )
}

export default ThirdDiv