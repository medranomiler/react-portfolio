import React from 'react';
import './assets/styles/project.css'
import picOne from "./assets/images/imgOne.png"
import Img2 from "./assets/images/img2.png"
import Img3 from "./assets/images/img3.jpg"
import Img4 from "./assets/images/img4.jpg"

function Portfolio(){   
    return(
<div className="project">
<main className="content">
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Portfolio
</h1>
<div class="grid grid-cols-2 gap-4">
<div>
<img class="rounded-lg" src={picOne} alt="image description" />
</div>

<div>
<img class="rounded-lg" src={Img2} alt="image description"/>
</div>

<div>
<img class="rounded-lg" src={Img3} alt="image description" />
</div>

<div>
<img class="rounded-lg" src={Img4} alt="image description" />
</div>
</div>
</main>
</div>
    )
}

export default Portfolio;