import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './fifthdiv.css';


function FifthDiv() {
  return (
    <section className='fifthsection'>
     <div className="fifthmain">
        <div id="fifthupper">
            <h4>OUR CUSTOMERS ARE SOME OF THE WORLD’S...</h4>

            <h3>Fastest growing companies</h3>
            <button type="button" className="btn btn-dark">View All <span><i class="fa-solid fa-arrow-right"></i></span></button>
        </div>

        <div className="fifthlower">
              <div className="imgcard">
                 <h1>ZARA</h1>
                 <h3>Ecommerce growth</h3>
                 <h3>+40%</h3>
                 <div className='centertext'>
                    <p>paid search , paid social ,SEO</p>
                 </div>

                 <a href="/">READ THE SUCCESS STORIES</a>
              </div>
              <div className="imgcard">
                 <h1>HOMME</h1>
                 <h3>Ecommerce growth</h3>
                 <h3>+40%</h3>
                 <div className='centertext'>
                    <p>paid search , paid social ,SEO</p>
                 </div>

                 <a href="/">READ THE SUCCESS STORIES</a>
              </div>
              <div className="imgcard">
                 <h1>ZARA</h1>
                 <h3>Ecommerce growth</h3>
                 <h3>+40%</h3>
                 <div className='centertext'>
                    <p>paid search , paid social ,SEO</p>
                 </div>

                 <a href="/">READ THE SUCCESS STORIES</a>
              </div>

        </div>
     </div>
     </section>
  )
}

export default FifthDiv