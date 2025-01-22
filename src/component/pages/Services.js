import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Make sure to install `lucide-react`

const services = [
  {
    title: "Building Structural Design",
    description: "Expert design services for constructing robust and efficient buildings.",
    link: "/building-structural-design",
    alt: "Building Structural Design",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bjxO4ZG45hOc6PpWZFEW1MtFqOdDe14Eeg&s",
  },
  {
    title: "Estimating And Costing",
    description: "Accurate estimating and costing services for construction projects.",
    link: "/estimating-and-costing",
    alt: "Estimating And Costing",
    imageUrl: "https://www.freshbooks.com/wp-content/uploads/2022/01/construction-cost-estimate.jpg",
  },
  {
    title: "Foundation Design",
    description: "Precision foundation designs to ensure stability and longevity.",
    link: "/foundation-design",
    alt: "Foundation Design",
    imageUrl: "https://gdiengdesign.com/wp-content/uploads/2023/05/Footing-foundation-520x245-1.jpg",
  },
  {
    title: "Peer Review Audit On Existing Building Design",
    description: "Comprehensive peer review audits for existing building designs.",
    link: "/peer-review-audit",
    alt: "Peer Review Audit",
    imageUrl: "https://www.letsbuild.com/wp-content/uploads/2023/07/shutterstock_1247187910.png",
  },
  {
    title: "Value Engineering And Certification On Building Stability Check",
    description: "Value engineering and certification services for building stability.",
    link: "/value-engineering",
    alt: "Value Engineering",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSjT2C_z6VbJxEp8Kuboe0d0KTkb43Ebi-Li8OeWzYr3pDODm2hFPV5aMAe_JiGZEC38&usqp=CAU",
  },
];

const ServiceCard = ({ title, description, link, alt, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[360px] h-[300px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="p-0 w-full h-full">
        <img
          src={imageUrl}
          alt={alt}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out filter grayscale"
        />
        {hovered && (
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-white bg-opacity-70 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-center mb-4">{description}</p>
            <a
              href={link}
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
            >
              Learn more
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 410; // Width of each card including margin
  const visibleCards = 0; // Number of visible cards in the viewport

  const totalCards = services.length;
  const maxIndex = totalCards - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 > maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <section className="py-16 bg-[#ecf1f7]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
          Our Services
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          We offer a range of expert services designed to meet your construction needs.
        </p>
        <div className="relative">
          <div className="flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-20 p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-200"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous slide</span>
            </button>
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * cardWidth}px)`,
                  width: `${totalCards * cardWidth}px`,
                }}
              >
                {services.map((service, index) => (
                  <div key={index} className="flex-shrink-0 w-[375px] mx-2">
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 z-20 p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-200"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
