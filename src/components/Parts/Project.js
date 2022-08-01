import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Back from './Back';
import Front from './Front';
class Project extends Component{render(){
    return(
            <section id='projects'>
                <Front />
                <Back />
            </section>   
        );
    }
}

export  default Project;