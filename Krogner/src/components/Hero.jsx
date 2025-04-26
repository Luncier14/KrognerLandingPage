import React from 'react'
import HeroPic1 from "../assets/HeroPic1.png"

const Hero = () => {
  return (
    <section id='home' className='container mx-auto flex flex-col md:flex-row justify-between pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
        {/* Left Column */}
        <div className='w-full md:w-1/2 space-y-8'>
        <div className='flex items-center gap-2 bg-rose-500 font-semibold text w-fit px-4 py-2 rounded-full hover:bg-rose-300 transition-colors cursor-pointer group'>
            <span className='text-purple-600 group-hover:text-purple-400 group-hover:scale-110 transition-transform'>💫</span>
            <span>Inicia tu proyecto con nosotros!</span>
        </div>

        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight '>
            Impulsamos tu crecimiento con <br />  
            <span className='text-purple-900 relative inline-block'> Soluciones
                <span className='absolute bottom-0 left-0 w-full h-1 bg-purple-200'></span>
                </span> <br />Tecnológicas personalizadas
            <span>💻</span>
        </h1>

        <p className='text-gray-800 text-lg md:text-xl max-w-xl'>Más que soporte: somos tu socio confiable en tecnología.</p>

        <div className='flex gap-3 max-w-md'>
            <input type="email" placeholder='Email Address' className='flex-1 px-6 py-4 border border-gray-200 
            rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all'/>
            <button className='bg-purple-900 text-white px-8 py-4 rounded-xl hover:bg-purple-700 cursor-pointer
             transition-all hover:shadow-lg hover:shadow-blue-300'>➜</button>
        </div>

        </div>


        {/* Right Column */}
        <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
        <div className='relative'>
            <img src={HeroPic1} alt="Hero image"
             className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300'/>
        </div>
        
        </div>
    </section>
  )
}

export default Hero