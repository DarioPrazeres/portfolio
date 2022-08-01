import React, { Component } from 'react';
import Perfil from './Parts/Perfil';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Parts/Skill';
import Project from './Parts/Project';
import Contact from './Parts/Contact';

class Body extends Component{render(){
    return(
        <section className='container-fluid sec-perfil bg-dark'>
            <Perfil/>
            <Skills/>
            <Project/>
            <Contact/>
        </section>  
        );
    }
}

export  default Body;