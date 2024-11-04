import React from 'react';
import { Helmet } from 'react-helmet';

import WhoWeAre from '../pages/AboutUs';
import Services from './Services';
import ContactUs from '../pages/contact';
import '../css/HomePage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Carousel from '../pages/carousel';
import Marquee from 'react-fast-marquee';
import Anim1 from './anim1';

const clientLogo1 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.54-PM.jpeg";
const clientLogo2 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.54-PM-1.jpeg";
const clientLogo3 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.54-PM-2.jpeg";
const clientLogo4 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.55-PM.jpeg";
const clientLogo5 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.56-PM-1.jpeg";
const clientLogo6 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.57-PM-1.jpeg";
const clientLogo7 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.57-PM.jpeg"; // New client logo
const img12="https://arrowstructures.com/wp-content/uploads/2021/09/Prabhu-Tiny.jpeg"

function App() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStartedClick = () => {
    navigate('/contact'); // Navigate to the Contact Us page
  };

  const handleLearnMoreClick = () => {
    navigate('/services'); // Navigate to the Services page
  };

  return (
    <div>
      <Helmet>
        <title>Arrow Structure - Leading Structural Consultancy & Construction</title>
        <meta
          name="description"
          content="Arrow Structure provides innovative structural consultancy and construction services. We deliver reliable, efficient, and sustainable solutions for architects, builders, and property owners."
        />
        <meta
          name="keywords"
          content="Arrow Structure, structural consultancy, construction, architectural design, building services, property development, structural analysis"
        />
        <meta
          property="og:title"
          content="Arrow Structure - Leading Structural Consultancy & Construction"
        />
        <meta
          property="og:description"
          content="Arrow Structure offers reliable consultancy and construction services for developers, architects, and homeowners. Get expert structural analysis and build your vision with us."
        />
        <meta
          property="og:url"
          content="https://www.arrowstructure.com"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Arrow Structure - Structural Consultancy & Construction"
        />
        <meta
          name="twitter:description"
          content="Arrow Structure provides high-quality structural consultancy and construction services. We help architects, developers, and property owners achieve their vision."
        />
        <link rel="canonical" href="https://www.arrowstructure.com/" />
        <script type="application/ld+json">
          {`{
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Arrow Structure",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street, Erode",
              "addressLocality": "Erode",
              "addressRegion": "TN",
              "postalCode": "638001",
              "addressCountry": "IN"
            },
            "telephone": "+91-8870594827",
            "url": "https://www.arrowstructure.com",
            "logo": "https://www.arrowstructure.com/logo.png",
            "sameAs": [
              "https://www.instagram.com/arrowstructure/",
              "https://x.com/ArrowStructure",
              "https://www.linkedin.com/company/arrowstructure/",
              "https://www.facebook.com/arrowstructure"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8870594827",
              "contactType": "Customer Support"
            }
          }`}
        </script>
      </Helmet>
      
      
      <Carousel/>
      <section className="hero">
      <div className="hero-content">
      <h1>Building the Future with Expert Structural Consultancy & Construction</h1>
      <p className="hero-description">
            At Arrow Structure, we provide top-tier structural consultancy and construction services. Our team of experts ensures reliable, efficient, and sustainable solutions tailored to your specific project needs.
            </p>
          <div className="cta-container">
          <button className="secondary-button" onClick={handleGetStartedClick}>
          Get Started with Us
          </button>
          <button className="secondary-button" onClick={handleLearnMoreClick}>
          Learn More About Our Services
          </button>
          </div>
          </div>
          </section>
    
          <div className="infinity-trans12">
          <div className="hom-fixed-grid-container1">
          <Marquee>Interior Design&nbsp;&nbsp;Modern Structures&nbsp;&nbsp;Modern Design&nbsp;&nbsp;Decoration</Marquee>
          </div>
          </div>
          
          {/* Unique Features Section */}
          <section className="unique-features">
          <h2>Why Choose Arrow Structure?</h2>
          <div className="features-grid">
          <div className="feature-item">
          <h3>Expert Consultancy</h3>
          <p>
          With years of experience, we provide precise structural analysis and consultancy services for architects, developers, and homeowners.
          </p>
          </div>
          <div className="feature-item">
          <h3>Quality Construction</h3>
          <p>
          Our construction services ensure that your projects are completed on time, within budget, and with the highest standards of quality and safety.
          </p>
          </div>
          <div className="feature-item">
          <h3>Sustainable Solutions</h3>
          <p>
          We prioritize eco-friendly materials and practices to ensure sustainability and reduce the environmental impact of construction projects.
          </p>
          </div>
          </div>
          </section>
          
          {/* About Us, Services, and Contact Us sections */}
          <Anim1/>
          <WhoWeAre />
      <Services />

      <section className="mt-3">
      <h2 className="text-2xl font-bold text-center">Our Esteemed Clients</h2>
      <Marquee speed={50} className="mt-20" pauseOnHover={true} loop={0}>
        <div className="flex space-x-10"> {/* Set space-x-8 to provide equal spacing */}
          {/* Marquee Item */}
          {[clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5, clientLogo6, clientLogo7].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-32 h-32 bg-black flex items-center justify-center overflow-hidden">
              <img src={logo} alt={`Client Logo ${index + 1}`} className="w-full h-full object-contain filter grayscale" />
            </div>
          ))}
          {/* Duplicate logos for seamless scrolling */}
          {[clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5, clientLogo6, clientLogo7].map((logo, index) => (
            <div key={index + 7} className="flex-shrink-0 w-32 h-32 bg-black flex items-center justify-center overflow-hidden">
              <img src={logo} alt={`Client Logo ${index + 1}`} className="w-full h-full object-contain filter grayscale" />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
      <ContactUs />
      </div>
      );
    }

    export default App;
    