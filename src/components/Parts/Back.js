import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import calcPhoto from '../img/project/calc.png';
import cvPhoto from '../img/project/memory.png';
import paperPhoto from '../img/project/smash.png';
import onlyPhoto from '../img/project/only.png';

class Back extends Component{render(){
    return(
        <div id="myCarousel" className="carousel slide dp" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
          
        </div>

        <div className="carousel-inner ">
          <div className="carousel-item active">
            <div className='project'>
                <div className='img-project'>
                    <img src={calcPhoto} alt='' />
                </div>
                <div className='disc'>
                    <h5>Calculator</h5>
                    <p>It is a base calculator. It only has four basics operactions (sum, subtraction, multiply and divide).</p>
                    <a href="#do" className='btn btn-danger'>Demo</a>
                    <a href="#dp" className='btn btn-light m-2'>Code</a>
                </div>
            </div>
          </div>
          <div className="carousel-item">  
          <div className='project'>
                        <div className='img-project'>
                            <img src={cvPhoto} alt='' />
                        </div>
                        <div className='disc'>
                            <h5>Memory Game</h5>
                            <p>It is a project and test the user to know how image he touch to not touch again.</p>
                            <a href="#do" className='btn btn-danger'>Demo</a>
                            <a href="#dp" className='btn btn-light m-2'>Code</a>
                        </div>
                    </div>
          </div>
          <div className="carousel-item">    
            <div className='project'>
                <div className='img-project'>
                    <img src={paperPhoto} alt='' />
                </div>
                <div className='disc'>
                    <h5>Smash Magazine clone</h5>
                    <p>It is a template of Smash Magazine and build with HTML and CSS.</p>
                    <a href="#do" className='btn btn-danger'>Demo</a>
                    <a href="#dp" className='btn btn-light m-2'>Code</a>
                </div>
            </div>
          </div>
          <div className="carousel-item">    
            <div className='project'>
                <div className='img-project'>
                    <img src={paperPhoto} alt='' />
                </div>
                <div className='disc'>
                    <h5>Smash Magazine clone</h5>
                    <p>It is a template of Smash Magazine and build with HTML and CSS.</p>
                    <a href="#do" className='btn btn-danger'>Demo</a>
                    <a href="#dp" className='btn btn-light m-2'>Code</a>
                </div>
            </div>            
          </div>
          <div className="carousel-item">    
            <div className='project'>
                <div className='img-project'>
                    <img src={paperPhoto} alt='' />
                </div>
                <div className='disc'>
                    <h5>Restaurant</h5>
                    <p>It is a layout of a simple restaurant. When user can see the menu and price.</p>
                    <a href="#do" className='btn btn-danger'>Demo</a>
                    <a href="#dp" className='btn btn-light m-2'>Code</a>
                </div>
            </div>
           </div>
           <div className="carousel-item">    
            <div className='project'>
                <div className='img-project'>
                    <img src={onlyPhoto} alt='' />
                </div>
                <div className='disc'>
                    <h5>Only Members</h5>
                    <p>These project gives to acess in user. It is divide by normal user and admin user.</p>
                    <a href="#do" className='btn btn-danger'>Demo</a>
                    <a href="#dp" className='btn btn-light m-2'>Code</a>
                </div>
            </div>            
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next " type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
        );
    }
}

export  default Back;