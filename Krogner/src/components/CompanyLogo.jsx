import React from 'react'
import samsung from '../assets/Samsung.png'
import HP from '../assets/HP.svg'
import Asus from '../assets/Asus.svg'
import Lenovo from '../assets/Lenovo.svg'
import Corsair from '../assets/Corsair.svg'

const CompanyLogo = () => {
  const logos = [samsung, HP, Asus, Lenovo, Corsair]

  return (
    <div className='w-full overflow-hidden container mx-auto py-20 gap-9 flex sm:flex-row flex-col sm:items-center items-start'>
      {/* Texto lateral */}
      <div className='w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-purple-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left'>
        Soluciones respaldadas por las <br /> mejores marcas
      </div>

      {/* Carril de logos */}
      <div className='relative w-full overflow-hidden group'>
        <div className='flex w-max animate-[scroll_30s_linear_infinite] whitespace-nowrap group-hover:[animation-play-state:paused]'>
          {/* LOGOS duplicados 3 veces para loop perfecto */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt='Company Logo'
              className='mx-12 h-20 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompanyLogo
