import React from 'react'

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col md:flex-row justify-between pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
        {/* Left Column */}
        <div className='w-full md:w-1/2 space-y-8'>
        <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group:'>
            <span className='text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform'>💫</span>
            <span>Inicia tu proyecto con nosotros!</span>
        </div>

        <h1>Solicita una asesoría gratuita <span>📲</span></h1>
        </div>


        {/* Right Column */}
        <div className='w-full md:w-1/2'></div>
    </section>
  )
}

export default Hero