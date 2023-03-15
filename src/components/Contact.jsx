import React from 'react'

export default function Contact() {
  return (
      <div name='contact' className='w-full h-screen bg-gray-900 flex justify-center items-center p-4'>
          <form method='POST' action="https://getform.io/f/daf1db23-290d-4711-9dd4-8b670870fd53" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-lime-600 text-gray-300'>Contact</p>
                  <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - amandacwatson88@gmail.com</p>
              </div>
              <input className=' rounded-xl bg-gray-200 p-2' type="text" placeholder='Name' name='name' />
              <input className=' rounded-xl my-4 p-2 bg-gray-200' type="email" placeholder='Email' name='email' />
              <textarea className='rounded-xl bg-gray-200 p-2' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-white border-2 hover:bg-lime-600 hover:border-lime-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's set up a meeting</button>
          </form>
      </div>
  )
}
