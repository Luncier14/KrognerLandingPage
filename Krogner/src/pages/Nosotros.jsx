import React from 'react'
import { motion } from "framer-motion"
import { textVariant} from '../utilities/motion';

const PurposeSection = () => {

   const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Impulsamos tu éxito",
      description: "En Krogner, contamos con un equipo diverso de expertos que se dedica a ofrecer soluciones innovadoras y personalizadas para cada cliente, impulsando su crecimiento."
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "Colaboración sin barreras",
      description: "Nos adaptamos a tus procesos y ritmo, integrándonos perfectamente con tu equipo para lograr resultados eficientes y de calidad."
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "Colaboración sin barreras",
      description: "Nos adaptamos a tus procesos y ritmo, integrándonos perfectamente con tu equipo para lograr resultados eficientes y de calidad."
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "Colaboración sin barreras",
      description: "Nos adaptamos a tus procesos y ritmo, integrándonos perfectamente con tu equipo para lograr resultados eficientes y de calidad."
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "Colaboración sin barreras",
      description: "Nos adaptamos a tus procesos y ritmo, integrándonos perfectamente con tu equipo para lograr resultados eficientes y de calidad."
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "Colaboración sin barreras",
      description: "Nos adaptamos a tus procesos y ritmo, integrándonos perfectamente con tu equipo para lograr resultados eficientes y de calidad."
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "Colaboración sin barreras",
      description: "Nos adaptamos a tus procesos y ritmo, integrándonos perfectamente con tu equipo para lograr resultados eficientes y de calidad."
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "Colaboración sin barreras",
      description: "Nos adaptamos a tus procesos y ritmo, integrándonos perfectamente con tu equipo para lograr resultados eficientes y de calidad."
    },
  ];
  
  return (
    <motion.section 
    variants={textVariant(0.7)}
            initial="hidden"
            whileInView="show"
    className='w-full bg-gray-100 py-16 px-4 sm:px-6 md:px-8' id='about'>
        <div className='max-w-6xl mx-auto mt-12'> 
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
            <div className=''>
                <p className='text-sm text-purple-800 font-medium mb-2'>Logra más!</p>
                <h2 className='text-3xl md:w-4/5 w-full md:text-4x1 font-bold text-gray-900'>Nuestro propósito: impulsar tu equipo</h2>
            </div>
                {/* Bullet points */}

                <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8'>
                    {
                      features.map((feature, index) => (
                        <div key={index} className='flex  space-x-4'>
                          <div className='w-12 h-12 flex items-center justify-start rounded-lg'>{feature.icon}</div>
                          <div>
                            <h3 className='text-xl font-semibold text-gray-900 mb-2'> {feature.title}</h3>
                            <p className='text-gray-600'>{feature.description}</p>
                          </div>
                        </div>
                      ))
                    }
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default PurposeSection