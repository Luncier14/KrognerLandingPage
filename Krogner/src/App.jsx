import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ServiceSection from './components/ServiceSection'

function App() {

  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[750px] h-[500px] bg-gradient-to-tr
       from-indigo-500/30 to-pink-500/30 rounded-full blur-[80px] -z-10'></div>
        <div className='overflow-hidden'>
          <Navbar/>
          <Hero/>
          <CompanyLogo/>
          <PurposeSection/>
          <FeaturesSection/>
          <ServiceSection/>

        </div>
    </main>
  )
}

export default App
