import React from 'react'

import { IoIosMail } from "react-icons/io";
import { HiLightBulb } from 'react-icons/hi'
import { IoServer } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";

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
]

const ServiceSection = () => {
    return (
        <section className='py-20 container mx-auto px-4 sm:px-6 lg:px-8' id='Services'>
            {/* Gradiente Wrapper */}
            <div className='relative'>
                <div className='absolute inset-0 w-full h-full bg-gradient-to-bl from-indigo-500/30 to-pink-500/30 rounded-lg blur-[80px] -z-10'></div>
                <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>
                    {/* Header */}
                    <div className='md:w-1/3 w-full'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-6 md:w-4/5'>Algunos de nuestros servicios</h2>
                        <p className='text-gray-600 text-lg mb-4 md:w-4/5 '>Servicios que transforman tu negocio</p>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-2'>
                                <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                    <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                                </div>
                                <span className='text-gray-600'>Adaptamos la tecnología a tus necesidades.</span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                    <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                                </div>
                                <span className='text-gray-600'>Soluciones personalizadas para tu empresa.</span>
                            </div>
                        </div>

                        <button className='mt-8 bg-indigo-500 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-800 transition-colors'>Empezar ahora</button>
                    </div>

                    {/* Services cards */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {services.map((service, index) => (
                            <div key={index} className='bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition-all duration-300 z-10'>
                                <div className='mb-4'>{service.icon}</div>
                                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                                <p className='text-gray-600 mb-4'>{service.description}</p>
                                <a href={service.link} className='text-indigo-600 font-medium hover:text-indigo-700 hover:underline transition-colors'>Learn more</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection
