import { useState, useEffect } from "react";
import { ChevronRight, Building, History, Paintbrush, Search, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RefurbishmentConservation() {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  const sections = [
    { id: "overview", title: "Overview", icon: Building },
    { id: "approach", title: "Our Approach", icon: Search },
    { id: "conservation", title: "Conservation", icon: History },
    { id: "historical", title: "Historical Buildings", icon: Paintbrush },
  ];

  const content = {
    overview: {
      title: "Understanding Existing Buildings",
      description:
        "Arrow Structures has a comprehensive understanding of existing buildings, allowing us to contribute effectively to projects from their inception. Our expertise spans initial surveys, intrusive investigations, and detailed designs for alterations and refurbishment.",
      points: [
        "Comprehensive initial surveys",
        "Thorough intrusive investigations",
        "Detailed designs for alterations",
        "Effective refurbishment solutions",
      ],
    },
    approach: {
      title: "Our Conservation Approach",
      description:
        "Conservation of existing buildings involves protection and restoration using methods that are effective in maintaining the property's original condition, sustainable for long-term preservation, and respectful of the building's historical and cultural significance.",
      points: [
        "Maintain original condition",
        "Ensure long-term preservation",
        "Respect historical significance",
        "Employ cutting-edge techniques",
      ],
    },
    conservation: {
      title: "Cultural Heritage Conservation",
      description:
        "Conservation of cultural heritage often extends beyond the building itself. It encompasses art collections, museums, collection care and management, tracking, examination, documentation, exhibition, storage, preventative conservation, and restoration techniques.",
      points: [
        "Art collections and museums",
        "Collection care and management",
        "Exhibition and storage solutions",
        "Preventative conservation measures",
      ],
    },
    historical: {
      title: "Working with Historical Buildings",
      description:
        "When working with historical buildings, we adopt a conservation-led approach and culture. This involves recognizing the building's underlying history and heritage as part of its value, conducting thorough research, and determining appropriate methods for repair, restoration, and alteration.",
      points: [
        "Research building's history and use",
        "Analyze historical setting",
        "Study past repairs and alterations",
        "Determine appropriate restoration techniques",
      ],
    },
  };

  const carouselImages = [
    "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694122.jpg?t=st=1731911779~exp=1731915379~hmac=3c01a742a7d7d2d23227b5cf3bd86f682b846de1feb876f004185d09ccb019b5&w=996",
    "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694122.jpg?t=st=1731911779~exp=1731915379~hmac=3c01a742a7d7d2d23227b5cf3bd86f682b846de1feb876f004185d09ccb019b5&w=996",
    "https://img.freepik.com/free-photo/ai-generated-house-design_23-2150666495.jpg?ga=GA1.1.1688160461.1727348287&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?ga=GA1.1.1688160461.1727348287&semt=ais_hybrid",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Refurbishment and Conservation Design</h1>
          <p className="text-xl text-gray-600">
            Preserving the past, enhancing the future. Expert solutions for building restoration and conservation.
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-10xl py-16 px-4">
        {/* Carousel */}
        <div className="mb-16 relative overflow-hidden rounded-lg shadow-lg w-full">
          <div className="relative w-full md:w-full h-[80vh] justify-center" >
            <div
              key={activeSlide}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity: activeSlide ? 1 : 0 }}
            >
              <img
                src={carouselImages[activeSlide]}
                alt={`Refurbishment project ${activeSlide + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prevSlide}
              className="rounded-full bg-white/80 text-gray-800 p-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full bg-white/80 text-gray-800 p-2"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === activeSlide ? "bg-white" : "bg-white/50"}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row gap-8">
          <nav className="md:w-1/3">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    className={`w-full flex items-center justify-start py-2 px-4 rounded-md transition-all ${
                      activeSection === section.id ? "bg-gray-100" : ""
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <section.icon className="mr-2 h-5 w-5" />
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content */}
          <div className="md:w-2/3">
            <div
              key={activeSection}
              className="transition-opacity duration-300 ease-in-out"
              style={{ opacity: activeSection ? 1 : 0 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{content[activeSection].title}</h2>
              <p className="mb-6 text-gray-600">{content[activeSection].description}</p>
              <ul className="space-y-2">
                {content[activeSection].points.map((point, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-gray-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-12 border-t border-gray-200"></div>

        {/* Expertise & Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
            <div className="relative h-[300px] w-full mb-4">
              <img
                src="https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg"
                alt="Refurbishment expertise"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-600">
              With years of experience in refurbishment and conservation, our team brings unparalleled expertise to every project, ensuring the highest standards of quality and authenticity.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Process</h3>
            <div className="relative h-[300px] w-full mb-4">
              <img
                src="https://media.istockphoto.com/id/1397878611/photo/upscale-modern-mansion-with-pool.jpg?s=612x612&w=0&k=20&c=ktQLd5qgTcyGeiejqvnIQNNFXo8KXILqnkOZrDf0gfg="
                alt="Conservation process"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-600">
              Our meticulous process combines thorough research, cutting-edge technology, and traditional craftsmanship to deliver outstanding results in building conservation and refurbishment.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white hover:bg-gray-800 py-3 px-6 rounded-lg text-lg flex items-center justify-center"
          onClick={() => navigate("/contact")} >
            Discuss Your Project
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
