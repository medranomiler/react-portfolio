import React from 'react';
import './assets/styles/project.css'
import headshot from "./assets/images/headshot.png"
import {useState} from "react"


function Project(){
    
const [aboutMe, setAboutMe] = useState(false)
const [portfolio, setPortfolio] = useState(false)
const [contact, setContact] =useState(true)
const [resume, setResume] = useState(false)


// function AboutMeHandler(e){
//     e.preventDefault()
//     // portfolio
//     // contact
//     // resume
//     setAboutMe = true
//     return
// }
// function PortfolioHandler(e){
//     e.preventDefault()
//     aboutMe
//     contact
//     resume
//     setPortfolio = true
//     return
// }

    if(aboutMe && !portfolio && !contact && !resume){
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
)
}else if(!aboutMe && portfolio && !contact && !resume){
    return(
        <div className="project">
            <main className="content">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    Portfolio
            </h1>
            </main>
        </div>
    )
}else if(!aboutMe && !portfolio && contact && !resume){
    return(
        <div className="project">
            <main className="content">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    Contact
            </h1>
            </main>
        </div>
    )
}else if(!aboutMe && !portfolio && contact && resume){
    return(
        <div className="project">
            <main className="content">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    Resume
            </h1>
            </main>
        </div>
    )
}
}


export default Project;