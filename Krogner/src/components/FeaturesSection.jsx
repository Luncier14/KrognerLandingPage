import React from 'react'

const features = [
    {
      icon: "🔍", 
      title: "Identificamos tus necesidades",
      description: "Presentamos una propuesta detallada, entendiendo cada detalle para ofrecerte la mejor solución adaptada a tu empresa."
    },
    {
      icon: "⚙️",
      title: "Personalización y alineación", 
      description: "Ajustamos cada detalle, para asegurar que todo esté perfectamente alineado con tus objetivos."
    },
    {
      icon: "🚀",
      title: "Implementación rápida y efectiva",
      description: "Con todos los detalles en su lugar, nos enfocamos en ejecutar las soluciones de manera rápida y eficiente."
    }
  ]


const FeaturesSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16'>
        {/* Heading texts */}
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>¿Cómo podemos ayudar a tu negocio?</h2>
            <p className='text-gray-600'>La confianza es la base de nuestras soluciones tecnológicas a medida.</p>
        </div>

        {/* Features */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                features.map((feature, index) => (
                    <div key={index} className='flex flex-col text-center items-center p-6'>
                       <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center' style={{
                        backgroundColor: index === 0 ? "#F1EFF0" : index === 1 ? "#FEE7E7" : "#FFF3E4"
                       }}>
                            <div className='text-3xl'>{feature.icon}</div>
                        </div> 

                        <h3 className='text-2xl font-medium mb-3'>{feature.title}</h3>
                        <p className='text-gray-500 text-center'>{feature.description}</p>
                    </div>
                ))
            }
        </div>

        {/* Btn */}


        <div className='text-center mt-12'>
            <button className='bg-purple-500 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-purple-800 transition-colors relative'>Agenda una consulta personalizada 
                <div className='absolute -z-10 w-full h-full rounded-full bg-purple-600/80 blur-xl top-0 left-0'>

                </div>
            </button>
        </div>
    </section>
  )
}

export default FeaturesSection