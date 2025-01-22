import React from 'react';
import { Helmet } from 'react-helmet';
import { Building2, HardHat, Ruler, Users } from 'lucide-react' // Importing required icons

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
                    <section className="py-2">
          <div className="container mx-auto px-7 mb-9">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Arrow Structure?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Expertise Card */}
              <div className="border border-black rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Building2 className="mr-2 text-xl text-black-600" />
                  <h3 className="text-xl font-semibold">Expertise</h3>
                </div>
                <p className="text-gray-700">
                  With years of experience in diverse projects, our team brings unparalleled expertise to every structural challenge.
                </p>
              </div>
              
              {/* Safety First Card */}
              <div className="border border-black rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <HardHat className="mr-2 text-xl text-black-600" />
                  <h3 className="text-xl font-semibold">Safety First</h3>
                </div>
                <p className="text-gray-700">
                  We prioritize safety in every aspect of our work, ensuring secure structures and construction processes.
                </p>
              </div>
              
              {/* Precision Card */}
              <div className="border border-black rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Ruler className="mr-2 text-xl text-black-600" />
                  <h3 className="text-xl font-semibold">Precision</h3>
                </div>
                <p className="text-gray-700">
                  Our attention to detail and use of cutting-edge technology ensure precise, efficient, and reliable solutions.
                </p>
              </div>
              
              {/* Client-Centric Card */}
              <div className="border border-black rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Users className="mr-2 text-xl text-black-600" />
                  <h3 className="text-xl font-semibold">Client-Centric</h3>
                </div>
                <p className="text-gray-700">
                  We work closely with our clients, tailoring our services to meet their specific needs and vision.
                </p>
              </div>
            </div>
          </div>
        </section>
        
          
          {/* About Us, Services, and Contact Us sections */}
          <Anim1/>
          <WhoWeAre />
      <Services />

<section className="mt-3">
  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Our Esteemed Clients</h2>
  <Marquee speed={50} className="mt-20" pauseOnHover={true} loop={0}>
    <div className="flex items-center">
      {/* First Set of Logos */}
      {[clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5, clientLogo6, clientLogo7].map((logo, index) => (
        <div
          key={`first-${index}`}
          className="flex-shrink-0 w-32 h-32 bg-black flex items-center justify-center overflow-hidden mx-5"
        >
          <img src={logo} alt={`Client Logo ${index + 1}`} className="w-full h-full object-contain filter grayscale" />
        </div>
      ))}
      {/* Add an explicit spacer between the first and duplicated sets */}
      <div className="flex-shrink-0 w-10 h-32"></div>
      {/* Second Set of Logos */}
      {[clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5, clientLogo6, clientLogo7].map((logo, index) => (
        <div
          key={`second-${index}`}
          className="flex-shrink-0 w-32 h-32 bg-black flex items-center justify-center overflow-hidden mx-5"
        >
          <img src={logo} alt={`Client Logo ${index + 1}`} className="w-full h-full object-contain filter grayscale" />
        </div>
      ))}
    </div>
  </Marquee>
</section>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <ContactUs  />
      </div>
      );
    }

    export default App;
    