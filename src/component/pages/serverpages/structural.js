import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <line x1="9" y1="22" x2="9" y2="2"></line>
    <line x1="15" y1="22" x2="15" y2="2"></line>
  </svg>
);

const BlueprintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="3" y1="15" x2="21" y2="15"></line>
    <line x1="9" y1="3" x2="9" y2="21"></line>
    <line x1="15" y1="3" x2="15" y2="21"></line>
  </svg>
);

const ToolsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

export default function Component() {
  const imageCards = [
    { 
      src: "https://media.gettyimages.com/id/1424381581/photo/large-villa-with-two-floors-and-garden-in-ed.jpg?s=612x612&w=0&k=20&c=a_jIm_vR31sYxRlADFKiqOiti8I3XLWau1581GRtnNU=", 
      alt: "Modern office building" 
    },
    { 
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wRuTmvm12bDLeXz3iUyexdGE1Z-USlAPDw&s", 
      alt: "Residential complex" 
    },
    { 
      src: "https://st.hzcdn.com/simgs/ceb12eed0a7831d2_4-6516/home-design.jpg", 
      alt: "Historic building renovation" 
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-#ecf1f7 text-black">
      <motion.header 
        className="p-8 md:p-16 lg:p-24 pb-8 md:pb-12 lg:pb-26"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mr-3 mt-12 ">Building Structural Design</h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-600">Professional services for all building types</p>
      </motion.header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {imageCards.map((image, index) => (
          <motion.div 
            key={index} 
            className="p-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={800}
              height={400}
              className="w-full h-48 object-cover rounded-lg shadow-lg" // Fixed height for uniformity
            />
          </motion.div>
        ))}
      </div>
      
      <main className="space-y-16 p-8 md:p-16 lg:p-24 pt-0">
        <motion.section {...fadeInUp}>
          <p className="text-lg md:text-xl font-bold leading-relaxed">
            We provide professional services for all building types, from state of the art to historic buildings, our projects range from small domestic to major projects of framed and multi-storey residential or commercial building design.
          </p>
        </motion.section>
        
        <motion.section {...fadeInUp}>
          <div className="flex items-center mb-6">
            <BuildingIcon />
            <h2 className="text-2xl md:text-3xl font-bold ml-4">Our Expertise</h2>
          </div>
          <ul className="space-y-4">
            <motion.li className="flex items-start" {...fadeInUp}>
              <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
              <p className="text-lg font-bold">Our design expertise encompasses all conventionally adopted materials using recognized and advanced techniques.</p>
            </motion.li>
            <motion.li className="flex items-start" {...fadeInUp}>
              <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
              <p className="text-lg font-bold">We regularly design projects of reinforced concrete and steel framed construction, steel concrete and other composite construction, masonry, timber, structural aluminium and glass construction.</p>
            </motion.li>
            <motion.li className="flex items-start" {...fadeInUp}>
              <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
              <p className="text-lg font-bold">Dynamic analysis and design of more dynamically sensitive or critical structures can be undertaken.</p>
            </motion.li>
          </ul>
        </motion.section>
        
        <motion.section {...fadeInUp}>
          <div className="flex items-center mb-6">
            <ToolsIcon />
            <h2 className="text-2xl md:text-3xl font-bold ml-4">Our Tools</h2>
          </div>
          <ul className="space-y-4">
            <motion.li className="flex items-start" {...fadeInUp}>
              <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
              <p className="text-lg font-bold">Design is fully supported with computer structural analysis design aids and tools, including finite element model and space frame model structural analysis.</p>
            </motion.li>
            <motion.li className="flex items-start" {...fadeInUp}>
              <ArrowRight className="mr-2 mt-1 flex-shrink-0" />
              <p className="text-lg font-bold">Design and drawing is output using CAD facilities.</p>
            </motion.li>
          </ul>
        </motion.section>
        
        <motion.section {...fadeInUp}>
          <div className="flex items-center mb-6">
            <BlueprintIcon />
            <h2 className="text-2xl md:text-3xl font-bold ml-4">Our Approach</h2>
          </div>
          <p className="text-lg font-bold">
            We highly value and ensure development of a close working relationship with the client, Architect and other design professionals.
          </p>
        </motion.section>
      </main>
    </div>
  );
}
