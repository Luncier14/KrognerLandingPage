import React, { useState } from 'react'
import logo from '../assets/krogner-logo.png'
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from "framer-motion"
import { fadeIn } from '../utilities/motion';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const navLinks = [
        { href: "#home", label: "Inicio" },
        { href: "#about", label: "Nosotros" },
        { href: "#Services", label: "Nuestros Servicios" },
        { href: "#contacto", label: "Contacto" }, // Añadido enlace directo a contacto
    ]

    const handleContactClick = () => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <motion.nav
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
            
            <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
                {/* logo */}
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src={logo} alt="Logo" className='h-20 w-20 opacity-75 hover:opacity-100 transition-opacity' />
                </div>

                {/* Mobile menu button */}
                <button onClick={() => setisMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
                    {isMenuOpen ? <HiX className='size-6' /> : <HiMenu className='size-6' />}
                </button>

                {/* desktop navitems */}
                <div className='hidden md:flex items-center gap-10'>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={`text-sm font-medium relative after:absolute after:bottom-0 
                            after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-900
                            after:transition-all ${activeLink === link.href ? "text-purple-900 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Botones de contacto */}
                <div className='hidden md:flex items-center gap-3'>
                    <a
                        href="https://wa.me/50687878480" // Reemplaza con tu número de WhatsApp
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center gap-2 bg-green-500 text-white px-4 py-2.5 rounded-lg hover:bg-green-600 text-sm font-medium transition-all hover:shadow-lg hover:-translate-y-1
                            active:scale-95 hover:shadow-green-100'
                    >
                        <FaWhatsapp className="text-lg" />
                        WhatsApp
                    </a>
                    <button
                        onClick={handleContactClick}
                        className='
                            bg-rose-500 
                            text-white 
                            px-6 py-2.5 
                            rounded-lg 
                            hover:bg-rose-600 
                            text-sm 
                            font-medium 
                            transition-all 
                            duration-300 
                            ease-in-out 
                            hover:shadow-lg 
                            hover:shadow-purple-100 
                            cursor-pointer
                            transform 
                            hover:-translate-y-1
                            active:scale-95
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-rose-400 
                            focus:ring-opacity-50
                        '
                        >
                        Contáctanos
                    </button>
                </div>
            </div>

            {/* Mobile menu items */}
            {isMenuOpen && (
                <div className='md:hidden bg-white border-t border-gray-100 py-4'>
                    <div className='container mx-auto px-4 space-y-3'>
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                onClick={() => {
                                    setActiveLink(link.href);
                                    setisMenuOpen(false);
                                }}
                                className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className='flex flex-col gap-3 pt-2'>
                            <a
                                href="https://wa.me/506TU_NUMERO" // Reemplaza con tu número de WhatsApp
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2.5 rounded-lg hover:bg-green-600 text-sm font-medium transition-all'
                            >
                                <FaWhatsapp className="text-lg" />
                                WhatsApp
                            </a>
                            <button
                                onClick={() => {
                                    handleContactClick();
                                    setisMenuOpen(false);
                                }}
                                className='w-full bg-rose-500 text-white px-6 py-2.5 rounded-lg hover:bg-rose-600 text-sm font-medium transition-all'
                            >
                                Contáctanos
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </motion.nav>
    )
}

export default Navbar