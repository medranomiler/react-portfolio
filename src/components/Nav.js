import React from "react";
import Logo from "./assets/images/logo.png"



function Nav() {
  return (
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <div class="flex items-center">
        <img 
        src={Logo}
        class="h-6 mr-3 sm:h-9" alt="Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap">React Portfolio</span>
    </div>
  </div>
</nav>
  );
}

export default Nav;