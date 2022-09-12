import React from 'react';
import './foot.css';
import footlogo from './footlogo.png';
const Foot = () => {
  return (
    <>
    <footer>
   <div className='container'>
    <div className='row'>
      <div className='col-12 coil-lg-10 mx-auto'>
        <div className='row' style={{marginTop : "15px"}}>
          <div className='col-7 col-lg-3'>
            <div>
            <img src={require("./footlogo.png")} style={{marginBottom: "10px"}} width="250" height="250" alt='jai ho'/>
            </div>
            </div>
            <div className='col-7 col-lg-3'>
            <h2>Catogries</h2>
            <ul>
              <li>
                <a href='asdsdf' style={{textDecoration: "none"}}>Design</a>
              </li>
              <li>
                <a href='asdsdf' style={{textDecoration: "none"}}>IT and Software</a>
              </li>
              <li>
                <a href='asdsdf' style={{textDecoration: "none"}}>AI and Machine Learning</a>
              </li>
              <li>
                <a href='asdsdf' style={{textDecoration: "none"}}>Music</a>
              </li>
              <li>
                <a href='asdsdf' style={{textDecoration: "none"}}>Personal Development</a>
              </li>
            </ul>
            </div>
            <div className='col-7 col-lg-3'>
            <h2>Company</h2>
            <ul>
              <li>
                <a href='asdsdf' style={{textDecoration: "none"}}>About Us</a>
              </li>
              <li>
                <a href='asdsdf' style={{textDecoration: "none"}}>Home</a>
              </li>
              <li>
                <a href='asdsdf' style={{textDecoration: 'none'}}>Terms & conditions</a>
              </li>
              <li>
                <a href='asdsdf' style={{textDecoration: 'none'}}>Contact Us</a>
              </li>
            </ul>
            </div>
            <div className='col-7 col-lg-3'>
            <h3>Follow Us On</h3>
            <div className='row' style={{marginTop : "25px"}}>
              <div className='col-3 mx-auto'>
                <a href='dfvrbytbn'>
                <i class="fa fa-facebook-official" style={{fontSize: "35px",color: 'white'}}></i>
                </a>
              </div>
              <div className='col-3 mx-auto'>
                <a href='www.google.com'>
              < i className="fa fa-linkedin-square" style={{fontSize: "35px",color: 'white'}}></i>
              </a>
              </div>
              <div className='col-3 mx-auto'>
                <a href='google.com'>
                <i class="fa fa-instagram" style={{fontSize: "35px",color: 'white'}}></i>
                </a>
              </div>
              <div className='col-3 mx-auto'>
                <a href='dfergv'>
                <i class="fa fa-google" style={{fontSize: "35px",color: 'white'}}></i>
                </a>
              </div>
            </div>
            </div>
          </div>
          <div class="col-xs-3" style={{marginTop : '20px'}}>
            <form action="">
        <label for="ex2">SUBSCRIBE  </label>
        <input className="email-address" style={{marginLeft: "10px"}} type="Email" placeholder='Enter your Email Here'/>
        </form>
      </div>
          <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ Axellio.com. All rights reserved.
                </p>
              </div>
        </div>
      </div>
    </div>

    </footer>
    </>
  )
}
export default Foot
