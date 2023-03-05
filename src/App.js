import React from "react";
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer'
import Resume from './components/Resume'
import Contact from "./components/Contact";
import Logo from "./components/assets/images/logo.png"
import {useState} from "react"
import "./components/assets/styles/app.css"




function App() {

const [content, setContent] = useState(false)


  function aboutMeHandler(e){
    e.preventDefault()
    return(
      setContent(<AboutMe />))
  }
  const contactHandler = (e) =>{
    e.preventDefault()
    return(
      setContent(<Contact />))
  }
  const portfolioHandler = (e) =>{
    e.preventDefault()
    return(
      setContent(<Portfolio />))
  }
  const resumeHandler = (e) => {
    e.preventDefault()
    return(
      setContent(<Resume />))
  }

  return (
    <div class="body">
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <div class="flex items-center cursor-pointer"
    onClick={aboutMeHandler}>
        <img 
        src={Logo}
        class="h-6 sm:h-6" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap">React Portfolio</span>
    </div>
  </div>

  <div class="navLinks">
        <ul class="flex md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white cursor-pointer">
        <li>
          <p 
          onClick={aboutMeHandler} 
          class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0" aria-current="page">About Me</p>
        </li>
        <li>
          <p 
          onClick={portfolioHandler} 
          className="portfolioLink" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Portfolio</p>
        </li>
        <li>
          <p 
          onClick={contactHandler} 
          className="contactLink" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</p>
        </li>
        <li>
          <p 
          onClick={resumeHandler} 
          className="resumeLink" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Resume</p>
        </li>
      </ul>
        </div>

</nav>

      <Header />
      {!content ? <AboutMe />: null}
      {content}
      <Footer />
    </div>
  );
}

export default App;
