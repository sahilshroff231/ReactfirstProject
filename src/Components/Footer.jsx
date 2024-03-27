import React from 'react'
import './footer.css'
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
   <section className='footerMain rounded-top'>
        <div className="footerbox">
            <div className="upperbox">
                  <div className="li2">
                    <h3>SOLUTIONS</h3>
                    <a href="/">paid search marketing</a>
                    <a href="/">Search engine optimization</a>
                    <a href="/">Email marketing</a>
                    <a href="/">Conversion rate optimization</a>
                  </div>
                  <div className="li2   newli">
                  <a href="/">paid search marketing</a>
                    <a href="/">Search engine optimization</a>
                    <a href="/">Email marketing</a>
                    <a href="/">Conversion rate optimization</a>
                  </div>

                  <div className="li2">
                    <h3>WHO WE ARE</h3>
                  <a href="/">paid search marketing</a>
                    <a href="/">Search engine optimization</a>
                    <a href="/">Email marketing</a>
                    
                  </div>

                  <div className="li2">
                    <h3>work</h3>
                  <a href="/">paid search</a>
                    <a href="/"> optimization</a>
                    <a href="/">Email marketing</a>
                    <a href="/">Conversion</a>
                  </div>
            </div>

            <div className="lowerbox bg-white rounded">
                    <div className="content10 d-flex  justify-content-between ">
                      <div className="leftlower10 d-flex ">
                           <a href="/" className='p-3 text-decoration-none text-black'>NUMBERIQUE</a>
                           <a href="/" className='p-3 text-decoration-none text-black'>Term & condition</a>
                           <a href="/" className='p-3 text-decoration-none text-black'>privecy</a>

                      </div>
                      <div className="rightlowe10  ">
                        <span className='p-3'><i class="fa-brands fa-facebook"></i></span>
                        <span className='p-3'><i class="fa-brands fa-instagram"></i></span>
                        <span className='p-3'><i class="fa-brands fa-linkedin"></i></span>
                        <span className='p-3'><i class="fa-brands fa-twitter"></i></span>
                      </div>
                    </div>
            </div>
        </div>


   </section>
  )
}

export default Footer