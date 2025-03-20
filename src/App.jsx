import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './homepage';
import Service from './services';
import HealthMaintenance from './healthMaintenance';
import LifeEnhancement from './lifeEnhancement';
import About from './about';
import Footer from './footer';

function App() { 
  return (
    <BrowserRouter>
      <Navbar />
      <Homepage/>
      <Service />  
      <HealthMaintenance />
      <LifeEnhancement />
      <About />
      <Footer />  {/* ✅ These components are always visible */}
    </BrowserRouter>
  );
}

export default App;
