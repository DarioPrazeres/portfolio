import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Front End Skills
import jsPhoto from '../img/js.webp';
import cssPhoto from '../img/css.webp';
import htmlPhoto from '../img/html.webp';
import bootPhoto from '../img/Boots.png';
import reactPhoto from '../img/react.png';
import wPPhoto from '../img/wp-1.png';
import pugPhoto from '../img/pug.png';

//Back End Skills
import nodePhoto from '../img/node.webp';
import tsPhoto from '../img/ts.webp'
import mongoPhoto from '../img/mongo.svg';
import mongoosePhoto from '../img/mg-2.png';
import exPhoto from '../img/ex.png';
import passPhoto from '../img/passport-1.png';
import sqlPhoto from '../img/mysql.png';

//Miscellaneous Skills
import gitPhoto from '../img/git.webp';
import githPhoto from '../img/github.png';
import linux from '../img/linux.png';
import webPhoto from '../img/webp.png';
import jestPhoto from '../img/jest.png';
import herokuPhoto from '../img/heroku.png';
import npmPhoto from '../img/npm.png';
import fbPhoto from '../img/fb.png';
class Skills extends Component{
    
    render(){
        return(
            <section className='skills ' id='skills'>
                <div className='part'>
                    <h5>Front-End Skill</h5>
                    <div className='part-skill'>
                        <div className='skil-disc'>
                            <img src={jsPhoto} alt='' className='skill-img'/>
                            <p>JavaScript</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={cssPhoto} alt='' className='skill-img'/>
                            <p>CSS</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={htmlPhoto} alt='' className='skill-img'/>
                            <p>HTML 5</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={bootPhoto} alt='' className='skill-img'/>
                            <p>Bootstrap</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={reactPhoto} alt='' className='skill-img'/>
                            <p>React</p>
                        </div>
                        <div className=' skil-disc'>
                            <h1 className='ejs'>EJS</h1>
                        </div>
                        <div className='skil-disc'>
                            <img src={pugPhoto} alt='' className='skill-img'/>
                            <p>PugJS</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={wPPhoto} alt='' className='skill-img'/>
                            <p>WordPress</p>
                        </div>
                    </div>
                </div>
                <div className='part'>
                    <h5>Back-End Skill</h5>
                    <div className='part-skill'>
                        <div className='skil-disc'>
                            <img src={jsPhoto} alt='' className='skill-img'/>
                            <p>JavaScript</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={nodePhoto} alt='' className='skill-img'/>
                            <p>Node JS</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={tsPhoto} alt='' className='skill-img'/>
                            <p>TypeScript</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={mongoPhoto} alt='' className='skill-img'/>
                            <p>Mongo DB</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={mongoosePhoto} alt='' className='skill-img'/>
                            <p className='exp'>Mongoose JS</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={exPhoto} alt='' className='skill-img'/>
                            <p>Express JS</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={passPhoto} alt='' className='skill-img'/>
                            <p>Passport JS</p>
                        </div>           
                        <div className='skil-disc'>
                            <img src={sqlPhoto} alt='' className='skill-img'/>
                            <p>MySql</p>
                        </div>              
                    </div>
                </div>
                <div className='part'>
                    <h5>Miscellaneous Skill</h5>
                    <div className='part-skill'>
                        <div className='skil-disc'>
                            <img src={gitPhoto} alt='' className='skill-img'/>
                            <p>Git</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={githPhoto} alt='' className='skill-img'/>
                            <p>GitHub</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={webPhoto} alt='' className='skill-img'/>
                            <p>Webpack</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={linux} alt='' className='skill-img'/>
                            <p>Linux</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={herokuPhoto} alt='' className='skill-img'/>
                            <p>Heroku</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={jestPhoto} alt='' className='skill-img'/>
                            <p>Jest</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={npmPhoto} alt='' className='skill-img'/>
                            <p>NPM</p>
                        </div>
                        <div className='skil-disc'>
                            <img src={fbPhoto} alt='' className='skill-img'/>
                            <p>Firebase</p>
                        </div>
                    </div>
                </div>
            </section> 
        );
    }
}

export  default Skills;