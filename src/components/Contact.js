import React from 'react';
import { useRef } from 'react'



function Contact(){

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    function onSubmit(e){
      e.preventDefault()
      console.log({
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      })
     alert("Success!")
     
      document.getElementById('name').value = " "
      document.getElementById('email').value = " "
      document.getElementById('message').value = " "
     
    }


    return(
        <div className="project">
            <main className="content">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    Contact Me
            </h1>

            <form onSubmit={onSubmit}>
  <div class="mb-6">
    <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
    <input id="name" ref={nameRef} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Alice" required />
  </div>
  <div class="mb-6">
    <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input ref={emailRef} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required />
  </div>
            <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea ref={messageRef} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <button type="submit" class="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
            </main>
        </div>
)
}

export default Contact;