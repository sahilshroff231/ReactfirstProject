import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import IMAGES from '../../Images/Image';
import './tenthdiv.css';

function TenthDiv() {
  return (
     <section className='tenthdivmain'>

        <div className="mainbox10">
            <div className="leftbox10">
                 <h3>THE TEAM BEHIND</h3>

                 <h2>Team of over 450 experts</h2>

                 <p>At Numerique, we’re focused on building strong and lasting client partnerships. By drawing on our deep industry knowledge and expertise, we provide the insights you need to build and evolve your brand, drive business performance and mitigate risk.</p>
                
                <div className="btn10">
                <button type="button" className="btn btn-dark">View All <span><i class="fa-solid fa-arrow-right"></i></span></button>
                </div>
                 
            </div>
            <div className="right10">
               <img  className='img17'src={IMAGES.img17} alt="" />
            </div>
        </div>
     </section>
  )
}

export default TenthDiv