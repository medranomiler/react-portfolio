import React from "react";
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer'
import Resume from './components/Resume'
import Contact from "./components/Contact";
import Logo from "./components/assets/images/logo512.png"
import {useState} from "react"
import "./components/assets/styles/app.css"




function App() {
const style = {
  nav: {
    backgroundImage: "url('https://cdn.pixabay.com/photo/2012/02/25/19/11/nightsky-16967_640.jpg')"
  }
}
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
    <nav class="p-4 shadow md:px-6 md:py-8 " style={style.nav}>
    <div class="sm:flex sm:items-center sm:justify-between">
        <div onClick={aboutMeHandler} class="flex items-center mb-4 sm:mb-0 cursor-pointer">
            <img src={Logo} class="h-8 mr-3" alt="Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">React Portfolio</span>
        </div>
        <ul class="flex flex-wrap items-center mb-6 text-lg text-white sm:mb-0 cursor-pointer">
            <li>
                <p onClick={aboutMeHandler}  class="mr-4 md:mr-6">About Me</p>
            </li>
            <li>
                <p onClick={portfolioHandler} class="mr-4 md:mr-6">Portfolio</p>
            </li>
            <li>
                <p 
    onClick={contactHandler}  class="mr-4 md:mr-6 ">Contact</p>
            </li>
            <li>
                <p 
    onClick={resumeHandler}>Resume</p>
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
