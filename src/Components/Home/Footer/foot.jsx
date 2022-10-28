import React from 'react';
import './foot.css';
// import footlogo from './footlogo.png';
const Foot = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-12 coil-lg-10 mx-auto'>
              <div className='row' style={{ marginTop: "15px" }}>
                <div className='col-7 col-lg-3'>
                  <div>
                    <img src={require("./footlogo.png")} style={{ marginBottom: "10px" }} width="210" height="210" alt='Axxelio' />
                  </div>
                </div>
                <div className='col-7 col-lg-3'>
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <a href='#' style={{ textDecoration: "none" }}>Web Development</a>
                    </li>
                    <li>
                      <a href='#' style={{ textDecoration: "none" }}>Business Management</a>
                    </li>
                    <li>
                      <a href='#' style={{ textDecoration: "none" }}>Investing & Trading</a>
                    </li>
                    <li>
                      <a href='#' style={{ textDecoration: "none" }}>Leadership</a>
                    </li>
                    <li>
                      <a href='#' style={{ textDecoration: "none" }}>Fitness</a>
                    </li>
                  </ul>
                </div>
                <div className='col-7 col-lg-3'>
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <a href='#' style={{ textDecoration: "none" }}>About Us</a>
                    </li>
                    <li>
                      <a href='#' style={{ textDecoration: "none" }}>Home</a>
                    </li>
                    <li>
                      <a href='#' style={{ textDecoration: 'none' }}>Terms & conditions</a>
                    </li>
                    <li>
                      <a href='#' style={{ textDecoration: 'none' }}>Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className='col-7 col-lg-3'>
                  <h3>Follow Us On</h3>
                  <div className='row' style={{ marginTop: "25px" }}>
                    <div className='col-3 mx-auto'>
                      <a href='#'>
                        <i className="fa fa-facebook-official" style={{ fontSize: "30px", color: 'white' }}></i>
                      </a>
                    </div>
                    <div className='col-3 mx-auto'>
                      <a href='#'>
                        < i className="fa fa-linkedin-square" style={{ fontSize: "30px", color: 'white' }}></i>
                      </a>
                    </div>
                    <div className='col-3 mx-auto'>
                      <a href='#'>
                        <i className="fa fa-instagram" style={{ fontSize: "30px", color: 'white' }}></i>
                      </a>
                    </div>
                    <div className='col-3 mx-auto'>
                      <a href='#'>
                        <i className="fa fa-google" style={{ fontSize: "30px", color: 'white' }}></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-3" style={{ marginTop: '20px' }}>
                <form action="">
                  <label htmlFor="ex2">SUBSCRIBE</label>
                  <input className="email-address" style={{ marginLeft: "10px" }} type="Email" placeholder='Enter your Email Here' />
                </form>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ Axxelio.com. All rights reserved.
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
