import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Navbar from './component/pages/navabr'; // Ensure the correct path and filename
import Home from './component/pages/Home';
import Footer from './component/pages/footer';
import Services from './component/pages/Services';
import AboutUs from './component/pages/Aboutpage';
import Contact from './component/pages/contact';
import ComingSoon from './component/pages/ComingSoon';
import FAQ from './component/pages/Faq.js';
import Structural from './component/pages/serverpages/structural';
import Temporary from './component/pages/serverpages/Temporary ';
import Foundation from './component/pages/serverpages/Foundation';
import Estimating from './component/pages/serverpages/Estimating';
import Peer from './component/pages/serverpages/Peer';
import Value from './component/pages/serverpages/Value';
import Refurbishment from './component/pages/serverpages/Refurbishment';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ComingSoon />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/building-structural-design' element={<Structural/>}/>
        <Route path='/temporary-works-design' element={<Temporary/>}/>
        <Route path='/foundation-design' element={<Foundation/>}/>
        <Route path='/estimating-and-costing' element={<Estimating/>}/>
        <Route path='/peer-review-audit' element={<Peer/>}/>
        <Route path='/value-engineering' element={<Value/>}/>
        <Route path='/refurbishment-conservation-design' element={<Refurbishment/>}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
