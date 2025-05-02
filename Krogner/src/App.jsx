import './App.css';
import './index.css'; // o './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Importa tus páginas
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import ServiceServer from './pages/Services/ServiceServers';
import ServiceConsulting from './pages/Services/ServiceConsulting';
import ServiceMail from './pages/Services/ServiceMail';
import ServiceDeve from './pages/Services/ServiceDeve';
import ServiceMaintainence from './pages/Services/ServiceMaintainence';
import ServiceNetwork from './pages/Services/ServiceNetwork';

import Nosotros from './pages/Nosotros';



function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[750px] h-[500px] bg-gradient-to-tr from-indigo-500/30 to-pink-500/30 rounded-full blur-[80px] -z-10'></div>
      
      {/* Componentes FIJOS (aparecen en todas las rutas) */}
      <Navbar />
      
      {/* Contenedor de rutas CAMBIANTES */}
      <div className='overflow-hidden'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/serviceServer" element={<ServiceServer/>} />
          <Route path="/serviceConsulting" element={<ServiceConsulting/>} />
          <Route path="/serviceMail" element={<ServiceMail/>} />
          <Route path="/serviceDeve" element={<ServiceDeve/>} />
          <Route path="/serviceMaintainence" element={<ServiceMaintainence/>} />
          <Route path="/serviceNetwork" element={<ServiceNetwork/>} />
          <Route path="/about" element={<Nosotros/>} />
        </Routes>
      </div>
      
      <Footer />
    </main>
  );
}

export default App;