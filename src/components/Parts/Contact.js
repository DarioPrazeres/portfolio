import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import gith from '../img/contact/g-0.png';
import tweet from '../img/contact/t-1.png';
import ln from '../img/contact/li.png'
class Contact extends Component{
    render(){
        return(
            <section id='contact' className='p-1'>
                <h3>Contact</h3>
                <p className='text-center'>Write me an E-mail at:</p>
                <h2 className='text-center' >darioedgarprazeres@gmail.com</h2>
                <h6 className='text-center' >OR</h6>
                <p className='text-center' >Reach me through social media:</p>
                <div className='social-media text-center'>
                    <a href='https://github.com/DarioPrazeres/' target='_blank' rel="noreferrer">
                       <img src={gith} alt='' width='40px' className='git'/> 
                    </a>
                    <a href='https://twitter.com/dario_prazeres/' target='_blank' rel="noreferrer">
                        <img src={tweet} alt='' width='40px' className='git'/>  
                    </a>
                    <a href='https://twitter.com/dario_prazeres/' target='_blank' rel="noreferrer">
                        <img src={ln} alt='' width='40px' className='git'/>  
                    </a>
                </div>
                
            </section>   
        );
    }
}

export  default Contact;