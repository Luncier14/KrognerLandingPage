import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/krogner-logo.png';


const servicesOptions = [
  { label: 'Servidores', href: '/ServiceServer' },
  { label: 'Redes y CCTV', href: 'ServiceNetwork' },
  { label: 'Asesorías tecnológicas', href: "/ServiceConsulting" },
  { label: 'Desarrollo de Software', href: "/ServiceDeve"},
  { label: 'Correo Electrónico Empresarial', href: "/ServiceMail" },
  { label: 'Soporte técnico y mantenimiento continuo', href: "/ServiceMaintainence" },
];

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Nosotros' },
  { href: '/ServiceServer', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isServicesOpen, setIsServicesOpen] = useState(false);




  const handleContactClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('contacto')?.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveLink('#contacto');
    } else {
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  const handleLinkClick = (href) => {
    setIsMenuOpen(false);

    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else {
      navigate(href);
    }

    setActiveLink(href);
  };

  return (
    <motion.nav
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 md:h-16 md:w-16 opacity-75 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => (
            link.label === 'Servicios' ? (
              <div className="relative" key={link.href}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors ${
                    activeLink === link.href
                      ? 'text-purple-600 border-b-2 border-purple-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                  <HiChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50"
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {servicesOptions.map((option, idx) => (
                      <a
                        key={idx}
                        href={option.href}
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {option.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href === '#contacto' ? '/' : link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.href === '#contacto') {
                    handleContactClick(e);
                  } else {
                    handleLinkClick(link.href);
                  }
                }}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeLink === link.href || (link.href === '#contacto' && activeLink === '#contacto')
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Botones Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/50687878480"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 text-sm font-medium transition-all hover:shadow-lg hover:-translate-y-1 active:scale-95 hover:shadow-green-100"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>

          <button
            onClick={(e) => {
              handleContactClick(e);
            }}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm font-medium transition-all hover:shadow-lg hover:-translate-y-1 active:scale-95 hover:shadow-blue-100"
          >
            <FaEnvelope className="text-lg" />
            Contáctanos
          </button>
        </div>

        {/* Botón Menú Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              link.label === 'Servicios' ? (
                <div key={link.href}>
                  <details className="group">
                    <summary className="flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 cursor-pointer">
                      Servicios
                      <HiChevronDown className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pl-4 space-y-2">
                      {servicesOptions.map((option, idx) => (
                        <a
                          key={idx}
                          href={option.href}
                          rel="noopener noreferrer"
                          className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          {option.label}
                        </a>
                      ))}
                    </div>
                  </details>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.href === '#contacto') {
                      handleContactClick(e);
                    } else {
                      handleLinkClick(link.href);
                    }
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium ${
                    activeLink === link.href
                      ? 'text-purple-600 bg-purple-50 rounded'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}

            <div className="pt-2 space-y-3">
              <a
                href="https://wa.me/50687878480"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>
              <button
                onClick={(e) => {
                  handleContactClick(e);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                <FaEnvelope className="text-lg" />
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
