import React from 'react'
import logo from '../assets/KROGNER-01.png'
import { FaFacebookF, FaInstagram, FaLinkedin, FaX } from 'react-icons/fa6'

const footerLinks = {
    Compañia: [
      { name: 'Sobre', href: '#' },
      { name: 'Terminos de Uso', href: '#' },
      { name: 'Políticas de privacidad', href: '#' },
      { name: 'Contactanos', href: '#' },
    ],
    Soporte: [
      { name: 'FAQ', href: '#' },
      { name: 'Politicas', href: '#' },
      { name: 'Negocios', href: '#' },
    ],
    Contacto: [
      { name: 'WhatsApp', href: 'https://wa.me/50687878480' },
    //   We should change support 24 for a href to a ticket page
      { name: 'Soporte 24', href: 'https://wa.me/50687878480' }, 
    ],
  }

const Footer = () => {
  return (
    <footer className='bg-indigo-50'>
        <div className='container mx-auto px-4 sm:px6 lg:px-8 pt-16 pb-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
                {/* brand column */}
                <div className='lg:col-span-4 '>
                    <div className='flex gap-1 items-center mb-6'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                                    <img src={logo} alt="Logo" className='h-20 w-20  opacity-75 hover:opacity-100 transition-opacity' />
                        </div>

                        <span className='text-xl font-medium ml-1'>Krogner</span>
                    </div>
                    <p className='text-gray-600 mb-6 md:w-3/4'>
                    ¡Déjanos ayudarte a alcanzar tus objetivos tecnológicos!

                    </p>
                    <div className='flex gap-2'>
                        <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-blue-400 transition-all'><FaFacebookF className='size-5'/></a>
                        <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-blue-400 transition-all'><FaLinkedin className='size-5'/></a>
                        <a href="#" className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-blue-400 transition-all'><FaInstagram className='size-5'/></a>
                    </div>
                </div>

                {/* Footer nav items */}

                <div className='lg:col-span-8'>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
                        {Object.entries(footerLinks).map(([category, Links], categoryIndex) => (
                            <div key={category}>
                                <h3 className='text-lg font-medium mb-4 uppercase'>{category}</h3>
                                <ul className='space-y-3'>
                                    {Links.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href} className='text-gray-600 hover:text-gray-900'>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* footer bottom */}

            <div className='border-t border-gray-200 mt-12 pt-8'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-gray-600 text-sm'>Copyright@ {new Date().getFullYear()} Krogner Costa Rica</p>
                    <p className='text-gray-600 text-sm'>Created by Krogner Dev</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer