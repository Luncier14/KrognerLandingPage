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
        icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
        title: "Asesorías tecnológicas",
        description: "Brindamos consultorías personalizadas para optimizar la tecnología de empresas y particulares, adaptándonos a sus necesidades.",
        link: "#learn-more"
    },
    {
        icon: <MdContactSupport className="w-8 h-8 text-indigo-600" />,
        title: "Soporte técnico y mantenimiento continuo",
        description: "Garantizamos que tus equipos y sistemas estén siempre funcionando de manera óptima mediante mantenimiento preventivo y correctivo.",
        link: "#learn-more"
    },
    {
        icon: <FaNetworkWired className="w-8 h-8 text-emerald-700" />,
        title: "Redes y CCTV",
        description: "Nos especializamos en el diseño, instalación y configuración de redes cableadas e inalámbricas para hogares, oficinas y grandes empresas.",
        link: "#learn-more"
    },
    {
        icon: <IoIosMail className="w-8 h-8 text-rose-900" />,
        title: "Correo Electrónico Empresarial",
        description: "Configuramos y gestionamos servicios de correo electrónico personalizados con tu propio dominio.",
        link: "#learn-more"
    },
    {
        icon: <IoServer className="w-8 h-8 text-cyan-400" />,
        title: "Servidores NAS",
        description: "Implementamos soluciones de almacenamiento centralizado (NAS) para empresas que necesitan gestionar y proteger grandes volúmenes de datos.",
        link: "#learn-more"
    },
    {
        icon: <MdDeveloperMode className="w-8 h-8 text-yellow-700" />,
        title: "Desarrollo de Software",
        description: "Creamos soluciones de software a medida que optimizan procesos, mejoran la eficiencia y se adaptan a las necesidades específicas de tu empresa.",
        link: "#learn-more"
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
                        className='grid grid-cols-1 md:grid-cols-6 gap-8'
                        >
                        {services.map((service, index) => (
                            <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }} // Direccion de la tarjeta eje x
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.3, 
                                ease: "easeOut" 
                            }}
                            viewport={{ once: true }} 
                            className='bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition-all duration-300 z-10'
                            >
                            <div className='mb-4'>{service.icon}</div>
                            <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                            <p className='text-gray-600 mb-4'>{service.description}</p>
                            <a href={service.link} className='text-indigo-600 font-medium hover:text-indigo-700 hover:underline transition-colors'>Learn more</a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection
