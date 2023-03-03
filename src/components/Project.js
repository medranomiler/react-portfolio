import React from 'react';
import './assets/styles/project.css'
import headshot from "./assets/images/headshot.png"
function Project(){
    
    return(
        <div className="project">
            <main className="content">
                <p className="heading">
                    About Me
                </p>
                <img
                src={headshot}
                />
                <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </main>
        </div>
)}


export default Project;