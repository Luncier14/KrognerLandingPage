import React from 'react';
import samsung from '../assets/Samsung.png';
import HP from '../assets/HP.svg';
import Asus from '../assets/Asus.svg';
import Lenovo from '../assets/Lenovo.svg';
import Corsair from '../assets/Corsair.svg';
import Microsoft from '../assets/Microsoft.png';
import Cisco from '../assets/cisco.png';
import ubiquiti from '../assets/ubiquiti.png';
import gigabyte from '../assets/gigabyte.png';
import mikrotik from '../assets/mikrotik.svg';
import linksys from '../assets/linksys.svg';
import { motion } from "framer-motion"
import { fadeIn } from '../utilities/motion';


const CompanyLogo = () => {
  const logos = [samsung, HP, Asus, Lenovo, Corsair, Microsoft, Cisco, linksys, ubiquiti, mikrotik, gigabyte];

  return (
    <motion.div
    variants={fadeIn('down', 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
    className='w-full overflow-hidden container mx-auto py-20 gap-9 flex sm:flex-row flex-col sm:items-center items-start'>
      {/* Texto lateral */}
      <div className='w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-purple-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left'>
        Soluciones respaldadas por las <br /> mejores marcas
      </div>

      {/* Carril de logos */}
      <motion.div
      variants={fadeIn('left', 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className='relative w-full overflow-hidden group bg-gray-100'>
        <div 
        className='flex w-max animate-[scroll_30s_linear_infinite] whitespace-nowrap group-hover:[animation-play-state:paused]'>
          {/* LOGOS duplicados 3 veces para loop perfecto */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index}
              className='mx-10 flex items-center justify-center'
              style={{ width: '120px', height: '80px' }} // Tamaño fijo para todos los contenedores
            >
              <img
                src={logo}
                alt='Company Logo'
                className='max-h-[60px] w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'
                style={{ maxWidth: '100px' }} // Tamaño máximo para las imágenes
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default CompanyLogo;