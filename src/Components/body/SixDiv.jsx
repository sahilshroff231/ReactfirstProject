import React from 'react'
import './sixdiv.css';

function SixDiv() {
  return (
       <section className='main6'>
        <div className="sixdiv">

            <div className="right6">
               <div className='head6'>
               <h2>Get your free marketing audit</h2>
               </div>
               <div  className='checkpart'>
               <p><span><i class="fa-solid fa-check"></i></span> 30-min strategy call</p>
                 <p><span><i class="fa-solid fa-check"></i></span>In- depth audit</p>
                 <p><span><i class="fa-solid fa-check"></i></span> Growth Roadmap</p>
               </div>
               
            </div>
            <div className="left6">
                 <div className='emailbox'>
                  <input type="text" placeholder='email' id="inputbox6" />
                 </div>
                 <div className='buttonbox'>
                    <button >next</button>
                 </div>
            </div>
        </div>

       </section>
  )
}

export default SixDiv