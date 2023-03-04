import React from "react";
import Header from './components/Header'
import Nav from './components/Nav'
import AboutMe from './components/AboutMe'
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer'
import Resume from './components/Resume'
import Contact from "./components/Contact";
import {useState} from "react"

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
    <div>
      <Nav />
      <div>
        <ul class="flex md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white cursor-pointer">
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
      <Header />
      {!content ? <AboutMe />: null}
      {content}
      <Footer />
    </div>
  );
}

export default App;
