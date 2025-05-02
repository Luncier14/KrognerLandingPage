import React from 'react'
import { motion } from "framer-motion"
import { textVariant } from '../utilities/motion';
import Mision from '../assets/Mision.png'
import Vision from '../assets/Vision.png'
import Values from '../assets/Values.png'
// Icons

import { VscWorkspaceTrusted } from "react-icons/vsc";
import { AiFillDingtalkCircle } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { TbEyeSearch } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";







const PurposeSection = () => {
  const features = [
    {
      icon: <VscWorkspaceTrusted />      ,
      title: "Impulsamos tu éxito",
      description: "En Krogner, contamos con un equipo diverso de expertos que se dedica a ofrecer soluciones innovadoras y personalizadas para cada cliente, impulsando su crecimiento."
    },
    {
      icon: <AiFillDingtalkCircle />      ,
      title: "Colaboración sin barreras",
      description: "Nos adaptamos a tus procesos y ritmo, integrándonos perfectamente con tu equipo para lograr resultados eficientes y de calidad."
    },
    {
      icon: <MdOutlineDesignServices />      ,
      title: "Enfoque personalizado",
      description: "Cada cliente es único. Ofrecemos atención y soluciones ajustadas a sus necesidades específicas para maximizar resultados."
    },
    {
      icon: <IoIosCreate /> ,
      title: "Innovación continua",
      description: "Nos mantenemos a la vanguardia tecnológica para garantizar que siempre recibas lo mejor en soluciones digitales."
    },
    {
      icon: <TbEyeSearch />      ,
      title: "Compromiso con la calidad",
      description: "Nuestro trabajo está guiado por altos estándares de calidad y ética profesional."
    },
    {
      icon: <MdSupportAgent />      ,
      title: "Soporte constante",
      description: "Acompañamos a nuestros clientes en cada paso, ofreciendo asesoría y soporte continuo."
    },
  ];

  const services = [
    {
      icon: <img src={Mision} alt="Mision" className='w-full h-auto max-w-70 max-h-70' />,
      title: "Misión",
      description: "Nuestra misión es brindar un servicio personalizado y confiable que permita a nuestros clientes alcanzar sus objetivos tecnológicos, optimizando recursos y garantizando calidad en cada proyecto.",
    },
    {
      icon: <img src={Vision} alt="Vision" className='w-full h-auto max-w-70 max-h-70' />,
      title: "Visión",
      description: "Nos proyectamos como la empresa líder en soluciones tecnológicas en Costa Rica, reconocidos por nuestra innovación, atención al cliente y compromiso con la excelencia.",
    },
    {
      icon: <img src={Values} alt="Values" className='w-full h-auto max-w-70 max-h-70' />,
      title: "Valores",
      description: "Creemos en la confianza como base de cada relación con nuestros clientes, ofreciendo soluciones tecnológicas confiables, transparentes y sostenibles.",
    },
  ];

  return (
    <motion.section
      variants={textVariant(0.7)}
      initial="hidden"
      whileInView="show"
      className='w-full bg-gray-50 py-10 px-4 sm:px-6 md:px-8'
      id='about'
    >
      {/* Servicios (Misión, Visión, Valores) */}
      <section className='w-full mx-auto px-4 py-16 md:py-24 overflow-x-auto'>
        <motion.div className='flex justify-center gap-6 md:gap-8 min-w-max'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.3,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className='bg-purple-200 min-w-[18rem] max-w-sm flex-shrink-0 cursor-pointer rounded-2xl p-6 hover:scale-105 hover:bg-purple-300 hover:shadow-xl transition-all duration-300 z-10 text-center flex flex-col items-center'
            >
              <div className='mb-4'>
                <div className="w-20 h-20 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-gray-600 mb-4'>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features (centrado en pantalla con flexbox) */}
      <div className="w-full  flex items-center justify-center px-4">
        <div className=" max-w-6xl w-full ">
          {/* Flexbox para centrar todo */}
          <div className=" flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <div key={index} className=" items-start space-x-4 max-w-[18rem] className='bg-purple-100 min-w-[18rem]  flex-shrink-0 cursor-pointer rounded-2xl p-6 hover:scale-105 hover:bg-rose-200 hover:shadow-xl transition-all duration-300 z-10 text-center flex flex-col items-center'">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg text-2xl">
                  {feature.icon}
                </div>
                <div >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PurposeSection;
