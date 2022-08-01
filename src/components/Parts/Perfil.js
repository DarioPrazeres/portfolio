import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import perfilPhoto from '../img/cat-family-job-board.svg';
import emailPhoto from '../img/email-1.png';
import callPhoto from '../img/call-1.png';

class Perfil extends Component{render(){
    return(
        <section className='perfil  text-light' id='home'>
            <div className='photo'>
                <img src={perfilPhoto} alt='' />
            </div>
            <div className='about-me'>
                <div className='personal'>
                    <div className='whosme'>
                        <h3 className='iam'>Dario Prazeres</h3>
                        <span >Full Stack</span>
                    </div>
                    <div className='phone'>
                        <span><img src={emailPhoto} alt='dario prazeres email'/> darioedgarprazeres@gmail.com</span>
                        <br/>
                        <span><img src={callPhoto} alt='dario prazeres phone number'/> (+244) 946 689 138</span>
                    </div>
                </div>
                <div className='things'>
                    <p className='text-justify'>I'm Dario Prazeres and I'm a full stack developer and freelancer. I have a passion for building and designing user-friendly software. I'm also a freelancer and available to work, and I can help you build your next dream project.</p>
                    <p>Self-motivated developer, who is willing create oustanding applications.</p>
                </div>
            </div>
        </section> 
        );
    }
}

export  default Perfil;