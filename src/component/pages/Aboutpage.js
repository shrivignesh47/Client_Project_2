import React from "react"; // Import React
import { motion } from "framer-motion";
import { Award, Users, Building, ChevronRight } from "lucide-react";
import placeholderImage from "./img1.jpg"; // Placeholder for actual logo
import Marquee from 'react-fast-marquee';

// Updated Client logos as constants
const clientLogo1 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.54-PM.jpeg";
const clientLogo2 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.54-PM-1.jpeg";
const clientLogo3 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.54-PM-2.jpeg";
const clientLogo4 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.55-PM.jpeg";
const clientLogo5 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.56-PM-1.jpeg";
const clientLogo6 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.57-PM-1.jpeg";
const clientLogo7 = "https://arrowstructures.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-16-at-12.52.57-PM.jpeg"; // New client logo
const img12="https://arrowstructures.com/wp-content/uploads/2021/09/Prabhu-Tiny.jpeg"

// Sample testimonials
const testimonials = [
  {
    name: "Mr.Mohan Kumar",
    position: "Managing Director-RK Construction, Coimbatore",
    testimonial: "Arrow Structures provided exceptional service and innovative solutions that helped us achieve our goals. Arrow is prompt to responding to their client’s requests, especially during time-crunching situations.",
  },
  {
    name: "Ar.Javith",
    position: "Managing Director-Javith Architecture",
    testimonial: "I have worked with Arrow Structures for over 3 years and have found them to be the best in the business. I have always been able to get accurate detailed explanations from Arrow Structures regarding their designs. They are always open to my suggestions and ideas. They perform in a very timely manner and meet their commitments. I recommend Arrow Structures for any project they are willing to take on.",
  },
  {
    name: "Yedu R Krishnan",
    position: "Project Manager-Brother’s Construction Company",
    testimonial: "I would highly recommend Arrow Structures to any client interested in obtaining the best in professional services for the structural design, engineering and investigative reporting for any project. Arrow Structures’s wealth of professional talent and experience has allowed them to be at the forefront of their profession and are well thought of by both their peers and other design, engineering and construction professionals. Any potential client will be pleased with the level of focus and services that Arrow Structures has to offer.",
  },
];

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-[#ecf1f7]">
      <main className="flex-1">
        <section className="w-full py-20 md:py-90 lg:py-48 bg-#ecf1f7-100 mt-[0vh]">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-2xl lg:text-6xl bg-clip-text bg-gradient-to-r from-gray-900 to-gray-900">
                Building Tomorrow, Today
              </h1>
              <p className="max-w-[700px] text-#ecf1f7-600 md:text-xl dark:text-#ecf1f7-400">
                Arrow Structures is at the forefront of innovative and sustainable structural engineering, shaping the future of our built environment.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-#ecf1f7-100">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
            >
              <div className="flex flex-col items-center space-y-4 p-6 bg-#ecf1f7-50 rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Award className="h-12 w-12 text-black-600" />
                <h2 className="text-2xl font-bold text-center">Excellence in Engineering</h2>
                <p className="text-center text-gray-600">Our commitment to quality and innovation has earned us recognition in the industry.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-#ecf1f7-50 rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Users className="h-12 w-12 text-black-600" />
                <h2 className="text-2xl font-bold text-center">Expert Team</h2>
                <p className="text-center text-black-600">Our diverse team of professionals brings a wealth of experience to every project.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-#ecf1f7-50 rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Building className="h-12 w-12 text-black-600" />
                <h2 className="text-2xl font-bold text-center">Sustainable Solutions</h2>
                <p className="text-center text-#ecf1f7-600">We prioritize eco-friendly practices and materials in all our constructions.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-#ecf1f7-100">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid gap-10 lg:grid-cols-2 items-center"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-#ecf1f7-100">
                Our Journey
              </h2>
              <p className="max-w-[700px] text-justify text-gray-600 text-base sm:text-lg md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                Arrow Structures is a design-led Structural and Civil Engineering Consultancy based in India. Arrow Structures was established in 2017 by Managing Director Prabhudev. Passion and innovation are central to the work ethic at Arrow Structures, driving us to deliver creative and practical engineering solutions with a hands-on approach. We pride ourselves on providing a prompt service with cost-effective and buildable designs. As a young and modern practice, adaptability is key to meeting the demands of the evolving construction industry; our flexible design-led approach provides an excellent service to Clients, Architects, and Contractors alike. The breadth of experience at Arrow Structures ranges from large new-build developments to complicated refurbishments. Our work also covers smaller projects, including domestic loft conversions, rear extensions, and building surveys.
              </p>
              <ul className="grid gap-4 mt-6">
                <li className="flex items-center gap-4">
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">2017: Company founded by Prabhudev</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={placeholderImage}
                alt="Arrow Structures Timeline"
                className="rounded-lg object-cover w-400 h-400 sm:w-400 sm:h-400 md:w-400 md:h-400"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      
       

<section className="w-full py-12 md:py-24 lg:py-32 bg-#ecf1f7-100">
  <div className="container px-4 md:px-6 mx-auto">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="grid gap-10 md:gap-20 lg:grid-cols-2 items-center"
    >
      <div className="flex lg:ml-[5vh]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col items-center space-y-4 bg-white rounded-lg shadow-lg p-6 w-80 sm:w-96"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            <img
              src={img12}
              alt="Prabhudev"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gray-600 opacity-30 rounded-md"></div>
          </div>
          <h3 className="text-xl font-bold">Prabhudev</h3>
          <p className="text-center text-gray-600">Founder & CEO</p>
        </motion.div>
      </div>
      <div className="space-y-4 lg:ml-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Meet Our Leadership
        </h2>
        <p className="max-w-full text-justify text-gray-600 text-base sm:text-lg md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
          Prabhudev studied Civil and Structural Engineering at Anna University, graduating with a First Class degree. He is a chartered member of the Institution of Engineers (India) and has over 7 years of design experience. He has worked on projects across all sectors, including residential, commercial, education, and industrial steel buildings, and has been the lead design engineer responsible for delivering numerous projects ranging from high-end residential refurbishments to mass housing developments up to 40m. His experience includes the structural design of many basements, school buildings, residential apartment buildings, and industrial buildings, which has allowed him to gain a vast knowledge of practical solutions available to create efficient, economic structures.
        </p>
      </div>
    </motion.div>
  </div>
</section>






      {/* our esteemed */} 
        <section className="w-full py-12 md:py- lg:py-32 bg-#ecf1f7-100">
          <div>
            <section className="mt-[2vh]">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-[15vh]">Our Esteemed Clients</h2>
              <Marquee speed={50} className="mt-4" pauseOnHover={true} loop={0}>
                <div className="flex space-x-8"> {/* Set space-x-8 to provide equal spacing */}
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

            {/* Testimonials Section */}
            <section className="mt-[30vh]">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-[15vh]">What Our Clients Say</h2>
              <div className="grid gap-10 mt-4 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
                  >
                    <p className="text-gray-600 italic text-center">"{testimonial.testimonial}"</p>
                    <h3 className="mt-4 text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
