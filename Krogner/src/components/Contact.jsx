'use client';
import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    acceptPolicies: false
  });

  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => {
        setFormStatus('');
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  useEffect(() => {
    if (copiedPhone || copiedEmail) {
      const timer = setTimeout(() => {
        if (copiedPhone) setCopiedPhone(false);
        if (copiedEmail) setCopiedEmail(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedPhone, copiedEmail]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    switch (true) {
      case !formData.acceptPolicies:
        setFormStatus('Debes aceptar las políticas de privacidad.');
        return;
      case isSubmitting:
        return;
      default:
        break;
    }

    setIsSubmitting(true);
    setFormStatus('Enviando mensaje...');

    try {
      const response = await fetch('http://localhost:3001/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('¡Mensaje enviado con éxito!');
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          message: '',
          acceptPolicies: false
        });
      } else {
        setFormStatus('Error al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('Error inesperado al enviar el mensaje.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, setCopiedFunction) => {
    navigator.clipboard.writeText(text);
    setCopiedFunction(true);
  };

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Panel informativo */}
          <div className="bg-indigo-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">Información de contacto</h3>
            
            <div className="space-y-6">
              {/* Teléfono con WhatsApp */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="text-lg font-medium text-gray-900">Teléfono</h4>
                  <div className="flex items-center mt-1">
                    <a 
                      href="https://wa.me/50612345678" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-900 hover:text-purple-700"
                    >
                      +506 1234 5678
                    </a>
                    <div className="relative ml-2">
                      <button 
                        onClick={() => copyToClipboard('+50612345678', setCopiedPhone)}
                        className="p-1 text-gray-500 hover:text-gray-700"
                        title="Copiar número"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                      </button>
                      {copiedPhone && (
                        <span className="absolute left-full ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded whitespace-nowrap">
                          ¡Copiado!
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Email con mailto */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <div className="flex items-center mt-1">
                    <a 
                      href="mailto:info@krogner.co.cr" 
                      className="text-purple-900 hover:text-purple-700"
                    >
                      info@krogner.co.cr
                    </a>
                    <div className="relative ml-2">
                      <button 
                        onClick={() => copyToClipboard('info@krogner.co.cr', setCopiedEmail)}
                        className="p-1 text-gray-500 hover:text-gray-700"
                        title="Copiar email"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                      </button>
                      {copiedEmail && (
                        <span className="absolute left-full ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded whitespace-nowrap">
                          ¡Copiado!
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dirección con Google Maps */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="text-lg font-medium text-gray-900">Dirección</h4>
                  <div className="mt-1">
                    <a 
                      href="https://www.google.com/maps/place/9.963781298311545,+-84.11632395505546" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-900 hover:text-purple-700"
                    >
                      Heredia, Costa Rica
                    </a>
                    <div className="mt-3 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31406.26761896891!2d-84.11632395505546!3d9.963781298311545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3aa66f5a1a5%3A0x8e3b9a3d5f3b1a1c!2sHeredia%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                        width="100%"
                        height="150"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horario de atención */}
              <div className="pt-6 border-t border-purple-100">
                <h4 className="text-lg font-medium text-purple-900 mb-3">Horario de atención</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo</span>
                    <span>Cerrado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contáctanos</h2>
              <p className="mt-2 text-lg text-gray-600">Déjanos tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">Nombre</label>
                  <div className="mt-2.5">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">Apellido</label>
                  <div className="mt-2.5">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900">Empresa</label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Correo electrónico</label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">Teléfono</label>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900">Mensaje</label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center sm:col-span-2 mb-6">
                  <input
                    type="checkbox"
                    name="acceptPolicies"
                    checked={formData.acceptPolicies}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-purple-900 focus:ring-purple-600"
                    id="acceptPolicies"
                    required
                  />
                  <label htmlFor="acceptPolicies" className="text-sm text-gray-600 ml-2">
                    Acepto las{' '}
                    <a href="#" className="font-semibold text-purple-900 hover:text-purple-700">
                      políticas de privacidad
                    </a>
                  </label>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  disabled={!formData.acceptPolicies || isSubmitting}
                  className={`w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900 ${
                    !formData.acceptPolicies || isSubmitting
                      ? 'cursor-not-allowed bg-gray-400'
                      : 'bg-purple-800 hover:bg-purple-600'
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </div>

              {formStatus && (
                <p className={`text-center mt-4 text-sm ${
                  formStatus.includes('éxito') ? 'text-green-600' : 
                  formStatus.includes('Enviando') ? 'text-blue-600' : 'text-red-600'
                }`}>
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}