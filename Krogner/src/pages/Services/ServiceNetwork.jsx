import React from 'react'

import { IoIosMail } from "react-icons/io";
import { HiLightBulb } from 'react-icons/hi'
import { IoServer } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";

import { motion } from "framer-motion"


const services = [

    {
        icon: <IoServer className="w-8 h-8 text-cyan-400" />,
        title: "Network",
        description: "Implementamos soluciones de almacenamiento centralizado para empresas que necesitan gestionar y proteger grandes volúmenes de datos.",
        link: "Ver más"
    },
   
]

const ServiceSection = () => {
    return (
        <section className='py-20 container mt-12 mx-auto px-4 sm:px-6 lg:px-8' id='Services'>
            {/* Gradiente Wrapper */}
            <div className='relative'>
                {/* Ajuste del gradiente: Posicionando más arriba y cambiando tamaño */}
                <div className='absolute -top-40 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-indigo-500/30 to-pink-500/30 rounded-full blur-[80px] -z-10'></div>
                <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>
                    {/* Header */}
                    

                    {/* Services cards */}
                    <motion.div
                        className='grid grid-cols-1 md:grid-cols-1 gap-10'
                        >
                        {services.map((service, index) => (
                    <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className={`
                                bg-gray-200  w-full rounded-2xl p-6 
                                hover:scale-105 hover:shadow-xl transition-all duration-300 
                                ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}
                            `}
                        >
                            <div className='mb-4'>{service.icon}</div>
                            <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                            <p className='text-gray-600 mb-4'>{service.description}</p>
                            <a
                                href={service.link}
                                className='text-indigo-600 font-medium hover:text-indigo-700 hover:underline transition-colors'
                            >
                                Learn more
                            </a>
                        </motion.div>
                    ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection
