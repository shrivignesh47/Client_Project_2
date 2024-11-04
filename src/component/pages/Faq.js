import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../css/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <Helmet>
        <title>FAQs - Arrow Structures</title>
        <meta
          name="description"
          content="Find answers to common questions about Arrow Structures' services, including structural engineering, civil engineering, and design solutions. Learn more about our founder, Prabhudev."
        />
        <meta
          name="keywords"
          content="Arrow Structures, construction, structural engineering, civil engineering, design consultancy, Prabhudev"
        />
        <meta
          name="author"
          content="Prabhudev, Arrow Structures"
        />
        <meta
          property="og:title"
          content="FAQs - Arrow Structures"
        />
        <meta
          property="og:description"
          content="Find answers to common questions about Arrow Structures' services, including structural engineering, civil engineering, and design solutions. Learn more about our founder, Prabhudev."
        />
        <meta
          property="og:image"
          content="https://example.com/image.jpg" // Replace with an appropriate image URL
        />
        <meta
          property="og:url"
          content="https://arrowstructures.com/faq" // Replace with the actual URL of your FAQ page
        />
        <meta
          property="twitter:title"
          content="FAQs - Arrow Structures"
        />
        <meta
          property="twitter:description"
          content="Find answers to common questions about Arrow Structures' services, including structural engineering, civil engineering, and design solutions. Learn more about our founder, Prabhudev."
        />
        <meta
          property="twitter:image"
          content="https://example.com/image.jpg" // Replace with an appropriate image URL for Twitter
        />
        <meta
          property="twitter:card"
          content="summary_large_image"
        />
        <script
          type="application/ld+json"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Arrow Structures offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Arrow Structures offers a range of services including structural and civil engineering consultancy, design solutions for construction projects, and project management. We focus on delivering innovative and practical engineering solutions tailored to the needs of our clients."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why should I choose Arrow Structures?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Arrow Structures is committed to excellence and innovation. Our hands-on approach and passion for design allow us to provide cost-effective and buildable designs. Our flexibility and adaptability ensure we meet the evolving demands of the construction industry."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of projects does Arrow Structures handle?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We handle a diverse range of projects, from large new-build developments to complex refurbishments. Our experience also includes smaller projects like domestic loft conversions and rear extensions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Arrow Structures ensure cost-effective designs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our approach includes thorough planning and analysis, ensuring that designs are not only innovative but also practical and buildable. We work closely with clients and contractors to deliver solutions that fit their budget without compromising quality."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Arrow Structures assist with project management?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer project management services to ensure that projects are completed on time and within budget. Our team collaborates with clients, architects, and contractors to facilitate smooth project execution."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the design process at Arrow Structures?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our design process involves initial consultations to understand client needs, followed by detailed planning and drafting. We utilize modern design software to create accurate and innovative solutions, ensuring compliance with all relevant standards."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I contact Arrow Structures for a consultation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact us through our website or call us directly at [your phone number]. We are happy to discuss your project requirements and arrange a consultation."
                  }
                }
              ]
            }
          `}
        </script>
        <script
          type="application/ld+json"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Prabhudev",
              "jobTitle": "Managing Director",
              "affiliation": {
                "@type": "Organization",
                "name": "Arrow Structures"
              },
              "image": "https://example.com/prabhudev.jpg", // Replace with the URL of the founder's photo
              "url": "https://arrowstructures.com/founder", // Replace with the URL of the founder's page
              "sameAs": [
                "https://www.linkedin.com/in/prabhudev", // Replace with actual social media URLs
                "https://twitter.com/prabhudev",
                "https://www.instagram.com/prabhudev/"
              ]
            }
          `}
        </script>
      </Helmet>
      <h1>Frequently Asked Questions</h1>

      <h2>About Arrow Structures</h2>
      <div
        className={`faq-item ${activeIndex === 0 ? 'active' : ''}`}
        onClick={() => toggleFAQ(0)}
      >
        <h3>What services does Arrow Structures offer?</h3>
        <p>
          Arrow Structures offers a range of services including structural and civil engineering consultancy, 
          design solutions for construction projects, and project management. We focus on delivering innovative 
          and practical engineering solutions tailored to the needs of our clients.
        </p>
      </div>

      <div
        className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}
        onClick={() => toggleFAQ(1)}
      >
        <h3>Why should I choose Arrow Structures?</h3>
        <p>
          Arrow Structures is committed to excellence and innovation. Our hands-on approach and passion for design 
          allow us to provide cost-effective and buildable designs. Our flexibility and adaptability ensure we meet 
          the evolving demands of the construction industry.
        </p>
      </div>

      <h2>Project Management and Design</h2>
      <div
        className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}
        onClick={() => toggleFAQ(2)}
      >
        <h3>What types of projects does Arrow Structures handle?</h3>
        <p>
          We handle a diverse range of projects, from large new-build developments to complex refurbishments. Our 
          experience also includes smaller projects like domestic loft conversions and rear extensions.
        </p>
      </div>

      <div
        className={`faq-item ${activeIndex === 3 ? 'active' : ''}`}
        onClick={() => toggleFAQ(3)}
      >
        <h3>How does Arrow Structures ensure cost-effective designs?</h3>
        <p>
          Our approach includes thorough planning and analysis, ensuring that designs are not only innovative but 
          also practical and buildable. We work closely with clients and contractors to deliver solutions that fit 
          their budget without compromising quality.
        </p>
      </div>

      <div
        className={`faq-item ${activeIndex === 4 ? 'active' : ''}`}
        onClick={() => toggleFAQ(4)}
      >
        <h3>Can Arrow Structures assist with project management?</h3>
        <p>
          Yes, we offer project management services to ensure that projects are completed on time and within budget. 
          Our team collaborates with clients, architects, and contractors to facilitate smooth project execution.
        </p>
      </div>

      <h2>Design Process</h2>
      <div
        className={`faq-item ${activeIndex === 5 ? 'active' : ''}`}
        onClick={() => toggleFAQ(5)}
      >
        <h3>What is the design process at Arrow Structures?</h3>
        <p>
          Our design process involves initial consultations to understand client needs, followed by detailed planning 
          and drafting. We utilize modern design software to create accurate and innovative solutions, ensuring compliance 
          with all relevant standards.
        </p>
      </div>

      <div
        className={`faq-item ${activeIndex === 6 ? 'active' : ''}`}
        onClick={() => toggleFAQ(6)}
      >
        <h3>How can I contact Arrow Structures for a consultation?</h3>
        <p>
          You can contact us through our website or call us directly at [your phone number]. We are happy to discuss 
          your project requirements and arrange a consultation.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
