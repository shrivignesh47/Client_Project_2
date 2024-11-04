import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Building Structural Design",
    description: "Expert design services for constructing robust and efficient buildings.",
    link: "/building-structural-design",
    alt: "Building Structural Design",
    imageUrl: "https://img.freepik.com/free-vector/build-your-life-vertical-banner-with-silhouettes-crane-unfinished-building-sunset-background-flat-illustration_1284-29080.jpg?t=st=1730437565~exp=1730441165~hmac=f43e5778b20db3a9b03d9805bf27d98d82a7753e41e2ff4179b7fd09576b098c&w=360",
  },
  {
    title: "Foundation Design",
    description: "Precision foundation designs to ensure stability and longevity.",
    link: "/foundation-design",
    alt: "Foundation Design",
    imageUrl: "https://gdiengdesign.com/wp-content/uploads/2023/05/Footing-foundation-520x245-1.jpg",
  },
  {
    title: "Estimating And Costing",
    description: "Accurate estimating and costing services for construction projects.",
    link: "/estimating-and-costing",
    alt: "Estimating And Costing",
    imageUrl: "https://img.freepik.com/premium-vector/buy-home-using-mobile-app-investment-property-tiny-people-pay-real-estate-online_1135642-360.jpg?ga=GA1.1.1688160461.1727348287&semt=ais_siglip",
  },
  {
    title: "Peer Review Audit On Existing Building Design",
    description: "Comprehensive peer review audits for existing building designs.",
    link: "/peer-review-audit",
    alt: "Peer Review Audit",
    imageUrl: "https://img.freepik.com/free-vector/website-audit-concept-web-page-analysis-website-s-visibility-search-engines-seo-audit-web-data-analytics-isolated-flat-vector-illustration_613284-1955.jpg?ga=GA1.1.1688160461.1727348287&semt=ais_siglip",
  },
  {
    title: "Temporary Works Design",
    description: "Design of temporary works to support construction activities.",
    link: "/temporary-works-design",
    alt: "Temporary Works Design",
    imageUrl: "https://arrowstructures.com/wp-content/uploads/2020/12/6.png",
  },
  {
    title: "Value Engineering And Certification On Building Stability Check",
    description: "Value engineering and certification services for building stability.",
    link: "/value-engineering",
    alt: "Value Engineering",
    imageUrl: "https://img.freepik.com/free-vector/construction-costs-abstract-concept-illustration-project-management-bank-loan-real-estate-business-design-project-building-investment-contractor-service-renovation_335657-3333.jpg?ga=GA1.1.1688160461.1727348287&semt=ais_siglip",
  },
  {
    title: "Refurbishment And Conservation Design",
    description: "Specialized design services for refurbishment and conservation projects.",
    link: "/refurbishment-conservation-design",
    alt: "Refurbishment And Conservation Design",
    imageUrl: "https://arrowstructures.com/wp-content/uploads/2020/12/3.png",
  },
];

const ServiceCard = ({ title, description, link, alt, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.imageContainer}>
        <img src={imageUrl} alt={alt} style={styles.image} />
        {hovered && (
          <div style={styles.overlay}>
            <h3 style={styles.cardTitle}>{title}</h3>
            <p style={styles.cardDescription}>{description}</p>
            <Link to={link} style={styles.button}>Learn more</Link>
          </div>
        )}
      </div>
    </div>
  );
};

const Services = () => (
  <div style={styles.container}>
    <h1 className="text-2xl font-bold text-center">Our Services</h1>
    <p style={styles.subtitle}>We offer a range of expert services designed to meet your construction needs.</p>
    <Swiper
      spaceBetween={30}
      slidesPerView={"auto"}
      centeredSlides={true}
      grabCursor={true}
      loop={true} // Disable autoplay
    >
      <div style={styles.featuresContainer}>
        {services.map((service, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <ServiceCard {...service} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  </div>
);

const styles = {
  container: {
    padding: "80px 20px",
    backgroundColor: "#ecf1f7",
    textAlign: "center",
  },
  title: {
    color: "#333",
    fontSize: "36px",
    marginBottom: "10px",
    fontFamily: "Arial, sans-serif",
  },
  subtitle: {
    color: "#555",
    fontSize: "18px",
    marginBottom: "40px",
    fontFamily: "Arial, sans-serif",
    fontStyle: "italic",
  },
  featuresContainer: {
    display: "flex",
    padding: "0 10px",
    gap: "30px",
  },
  card: {
    position: "relative",
    width: "500px",
    height: "291px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    margin: "0",
  },
  imageContainer: {
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    height: "300px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: " grayscale(100%)",
    transition: "transform 0.3s ease",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(10px)",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    opacity: 1,
    transition: "opacity 0.3s ease",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "20px",
    margin: "0 0 10px",
    fontWeight: "600",
  },
  cardDescription: {
    fontSize: "15px",
    margin: "0 0 15px",
    lineHeight: "1.5",
  },
  button: {
    backgroundColor: "black",
    color: "#ffffff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 0.3s",
  },
  "@media (max-width: 768px)": {
    featuresContainer: {
      flexDirection: "column",
      alignItems: "center",
    },
    card: {
      width: "90%",
    },
  },
};

export default Services;
