import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building, Shovel, Layers, Zap, Anchor, Shield, Quote } from 'lucide-react';

const FoundationIcon = ({ icon: Icon, title }) => (
  <div className="flex items-center space-x-2 text-primary">
    <Icon size={24} />
    <span className="font-semibold">{title}</span>
  </div>
);

const GradientText = ({ children, className = "" }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ${className}`}>
    {children}
  </span>
);

export default function FoundationDesign() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.header 
        className="p-8 md:p-16 lg:p-24 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://www.geoengineer.org/storage/education/2306/featured_image/23815/featured_image.jpeg" // Update this to your image path
          alt="Foundation construction site"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          style={{ height: '400px', width: '2200px' }} // Use style for dimensions
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <GradientText>Foundation Design</GradientText>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Expertise in the full spectrum of buildings and structures
          </p>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        <motion.section {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed">
            Foundation designs of the full spectrum of buildings and structures is undertaken including low rise to multi-storey structures. We have expertise of foundation design of structures on difficult ground or with special design requirements.
          </p>
        </motion.section>

        <motion.section {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <GradientText>Our Expertise</GradientText>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="mb-4">
                <FoundationIcon icon={Building} title="Multi-storey Structures" />
              </div>
              <p className="text-gray-700">
                From low-rise to high-rise, we design foundations for all building types.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="mb-4">
                <FoundationIcon icon={Shovel} title="Difficult Ground" />
              </div>
              <p className="text-gray-700">
                Expertise in foundation design for structures on challenging terrains.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="mb-4">
                <FoundationIcon icon={Layers} title="Comprehensive Analysis" />
              </div>
              <p className="text-gray-700">
                Thorough investigation of ground and foundation conditions, including adjacent structures.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="mb-4">
                <FoundationIcon icon={Zap} title="Specialized Solutions" />
              </div>
              <p className="text-gray-700">
                Design of bored and driven piled foundations, reinforced concrete ground beams, and more.
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="mb-4">
                <FoundationIcon icon={Anchor} title="Adverse Conditions" />
              </div>
              <p className="text-gray-700">
                Solutions for shrinkable clay soils and other adverse ground conditions.
              </p>
            </div>
            {/* Card 6 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="mb-4">
                <FoundationIcon icon={Shield} title="Stabilization" />
              </div>
              <p className="text-gray-700">
                Expert design of underpinning and foundation stabilization works.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <GradientText>Our Approach</GradientText>
          </h2>
          <div className="space-y-4">
            <motion.div {...fadeInUp} className="flex items-start">
              <ArrowRight className="mr-2 mt-1 flex-shrink-0 text-primary" />
              <p className="text-lg">
                Investigation to have a proper understanding of the ground and foundation conditions, including those of adjacent buildings and structures, is crucial to enable proper and efficient foundation design.
              </p>
            </motion.div>
            {/* Add other points similarly */}
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            <GradientText>Comprehensive Design Service</GradientText>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our expert comprehensive design service includes designs of underpinning or other foundation stabilization or improvement works, ensuring the stability and longevity of your structures.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="bg-secondary/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <GradientText>What Our Clients Say</GradientText>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 bg-background/50 backdrop-blur-sm">
              <Quote className="text-primary mb-4" size={32} />
              <p className="text-lg italic mb-4">
                "Their expertise in foundation design for our multi-storey project was invaluable. They tackled challenging ground conditions with innovative solutions."
              </p>
              <p className="font-semibold">- John Doe, Architect</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 bg-background/50 backdrop-blur-sm">
              <Quote className="text-primary mb-4" size={32} />
              <p className="text-lg italic mb-4">
                "The team's comprehensive analysis and approach to our historic building's foundation stabilization was impressive. They ensured the structure's integrity while preserving its character."
              </p>
              <p className="font-semibold">- Jane Smith, Conservation Specialist</p>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="relative">
          <img
            src="https://www.geoengineer.org/storage/education/2306/featured_image/23815/featured_image.jpeg" // Update this to your image path
            alt="Foundation design blueprint"
            className="w-full h-64 object-cover rounded-lg"
            style={{ height: '400px', width: '2200px' }} // Use style for dimensions
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent flex items-center p-8">
            <p className="text-2xl font-bold max-w-lg">
              From concept to completion, we ensure your foundation is built to last.
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
