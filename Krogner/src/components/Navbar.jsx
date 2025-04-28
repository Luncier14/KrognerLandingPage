import React, { use, useState } from 'react'
import logo from '../assets/KROGNER-01.png' // Ajusta la ruta si está en otro lugar
import { HiMenu , HiX } from 'react-icons/hi';
import { motion } from "framer-motion"
import { fadeIn } from '../utilities/motion';

const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const navLinks= [
       { href: "#home", label: "Inicio"},
       { href: "#about", label: "Nosotros"},
       { href: "#Services", label: "Nuestros Servicios"},
    //    { href: "#Terstimonials", label: "Testimonios"},
    ]



  return (
    <motion.nav 
    variants={fadeIn('down', 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once: true}}
    className='fixed top-0 left-0 right-0 bg-white/90 
    backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
        <div className='w-full container mx-auto flex items-center
         justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
            {/* logo */}
            <div className='flex items-center gap-2 cursor-pointer'>
                <img src={logo} alt="Logo" className='h-20 w-20  opacity-75 hover:opacity-100 transition-opacity' />
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setisMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
                {
                    isMenuOpen ?  <HiX className='size-6'/> : <HiMenu className='size-6'/>
                }
            </button>


            {/* desktop navitems */}
            <div className='hidden md:flex items-center gap-10'>
                {
                    navLinks.map((link, index) => (
                        <a key={index} href={link.href} 
                        onClick={() => setActiveLink(link.href)}
                        className={`text-sm font-medium relative after:absolute after:bottom-0 
                        after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-900
                         after:transition-all ${activeLink === link.href ? "text-purple-900 after:w-full": "text-gray-600 hover:text-gray-900"}`}>
                        {link.label}
                        
                        </a>
                    ))
                }
            </div>


            {/* get in touch  */}
                <button className='hidden md:block bg-rose-500 text-white px-6 py-2.5 rounded-lg hover:bg-rose-300 text-sm font-medium transition-all hover:shadow-lg hover:shadow-purple-100'>
                Contáctanos
                </button>

            {/* mobile menu */}
        </div>

        {/* Mobile menu items */}
        {
            isMenuOpen && (
                <div className='md:hidden bg-white border-t border-gray-100 py-4'>
                    <div className='container mx-auto px-4 space-y-3'>
                        {navLinks.map((link,index) => (
                            <a 
                            key={index}
                            onClick={() => {
                                setActiveLink(link.href);
                                setisMenuOpen(false);
                            }}
                            className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`} href={link.href}>{link.label}</a>
                        ))}

                        <button className='w-full bg-rose-500 text-white px-6 py-2.5 rounded-lg hover:bg-rose-300 text-sm font-medium transition-all hover:shadow-lg hover:shadow-purple-100'>
                            Contáctanos
                        </button>

                    </div>
                </div>
            )
        }
    </motion.nav>
  )
}

export default Navbar
