import React from 'react';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Splash from './Components/Splash';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import LogoBank from './Components/LogoBank';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Splash />
      <Services />
      <Pricing />
      <Portfolio />
      <LogoBank />
      <Footer />
    </div>
  );
}

export default App;
