import React from 'react';
import './assets/styles/project.css'
import headshot from "./assets/images/headshot.png"
function Project(){
    
    return(
        <div className="project">
            <main className="content">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    About Me
            </h1>
                <img
                src={headshot}
                />
                <blockquote class="text-2xl italic font-semibold text-gray-900 mt-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </blockquote>
            </main>
        </div>
)}


export default Project;