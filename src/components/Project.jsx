import React from 'react'
import accommodationpage from '../assets/accommodationpage.jpg'
import MovieProject from '../assets/moviesproject.jpg'
import Moviesreact from '../assets/reactmovies.jpg'
import allrepos from '../assets/projects.jpg'

export default function Project() {
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-gray-900'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-lime-600'>
            Project
          </p>
          <p className='py-6'>// Check out some of my recent projects</p>
        </div>

        {/* container for projects */}
   
        <div class="w-full grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div class="w-full rounded group">
            <div class="group">
              <div class="relative overflow-hidden">
                <img class="h-96 w-full object-cover rounded-2xl" src={MovieProject} alt="" />
                <p className='text-center text-xl'>Vuejs movie search application</p>
                <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="https://github.com/AmandaCambroneroWatson/vuecliprojekt.github.io"><button className="bg-lime-900 text-white py-2 px-5">Checkout repository</button></a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full rounded group">
            <div class="group">
              <div class="relative overflow-hidden">
                <img class="h-96 w-full object-cover rounded-2xl" src={accommodationpage} alt="" />
                <p className='text-center text-xl'>Mern booking website</p>
                <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="https://github.com/AmandaCambroneroWatson/examensarbete"><button class="bg-lime-900 text-white py-2 px-5">Checkout repository</button></a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full rounded group">
            <div class="group">
              <div class="relative overflow-hidden">
                <img class="h-96 w-full object-cover rounded-2xl" src={Moviesreact} alt="" />
                <p className='text-center text-xl'>React movie search application</p>
                <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="https://github.com/AmandaCambroneroWatson/react-redux-movie-search-app/tree/master"><button class="bg-lime-900 text-white py-2 px-5">Checkout repository</button></a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full rounded group">
            <div class="group">
              <div class="relative overflow-hidden">
                <img class="h-96 w-96 object-cover rounded-2xl" src={allrepos} alt="" />
                <p className='text-center text-xl'>All repositories</p>
                <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="https://github.com/AmandaCambroneroWatson"><button class="bg-lime-900 text-white py-2 px-5">Checkout repository</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};