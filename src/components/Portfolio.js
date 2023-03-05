import React from 'react';
import './assets/styles/project.css'
import Img1 from "./assets/images/picOne.png"
import Img2 from "./assets/images/picTwo.png"
import Img3 from "./assets/images/picThree.png"
import Img4 from "./assets/images/picFour.png"
import Img5 from "./assets/images/picFive.png"
import Img6 from "./assets/images/picSix.png"


function Portfolio(){   
    return(
<div className="project">
<main className="content">
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Portfolio
</h1>
<div class="grid grid-cols-2 gap-4">
<div>
<figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="https://space-defence.herokuapp.com/">
<img class="rounded-lg" src={Img1}/>
</a>
<figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>Space Defence</p>
  </figcaption>
</figure>
</div>

<div>
<figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="https://my-notes.herokuapp.com/">
<img class="rounded-lg" src={Img2}/>
</a>
<figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>My Notes</p>
  </figcaption>
</figure>
</div>

<div>
<figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="https://not-just-another-text-editor.herokuapp.com/">
<img class="rounded-lg" src={Img3}/>
</a>
<figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>Just Another Text Editor</p>
  </figcaption>
</figure>
</div>

<div>
<figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="https://medranomiler.github.io/weather-dashboard/">
<img class="rounded-lg" src={Img4} />
</a>
<figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>Weather Dashboard</p>
  </figcaption>
</figure>
</div>

<div>
<figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="https://the-tech-blog.herokuapp.com/">
<img class="rounded-lg" src={Img5}/>
</a>
<figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>The Tech Blog</p>
  </figcaption>
</figure>
</div>

<div>
<figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="https://github.com/medranomiler/readme-generator">    
<img class="rounded-lg" src={Img6}/>
</a>
<figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>ReadMe Generator</p>
  </figcaption>
</figure>
</div>
</div>
</main>
</div>
    )
}

export default Portfolio;