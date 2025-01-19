import React from 'react';
import Navbar from './components/Navbar';
import  About from './sections/About';
import PopularAreas from './sections/PopularAreas';
import Properties from './sections/Properties';
import Services  from './sections/Services';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import 'aos/dist/aos.css'; //animation css 
import Slider from './sections/Slider';

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Slider />
      <About/>
      <PopularAreas/>
      <Properties/>
      <Services/>
      <Clients/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App;
