import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Carousel.css'; // Custom styles for carousel


export default function Carousel() {
  const slides = [
    {
      title: "AGAM HOUSE",
      subtitle: "Houses",
      imageUrl:'https://mawidesign.in/wp-content/uploads/2022/11/16AA-scaled.jpg'
    },
    {
      title: "THROUGH",
      subtitle: "LAYERS Houses",
      imageUrl: 'https://mawidesign.in/wp-content/uploads/2023/01/Ghouse-4267.jpg'
    },
    {
      title: "G HOUSE",
      subtitle: "Houses",
      imageUrl: 'https://mawidesign.in/wp-content/uploads/2022/11/DSC0171-scaled.jpg'
    },
    {
      title: "MODERN",
      subtitle: "Houses",
      imageUrl: 'https://img.freepik.com/free-photo/illustration-construction-site_23-2151850238.jpg?t=st=1730089080~exp=1730092680~hmac=fda6ee563d725e7a0d6ddab09c9be23016117568ddb3acc99f4a04ee88e772ba&w=1060'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.imageUrl} alt={slide.title} className="carousel-image" />
            <div className="carousel-text">
              <h1>{slide.title}</h1>
              <button className="view-more-btn">+ VIEW MORE</button>
            </div>
            <div className="carousel-navigation">
              {slides.map((navItem, navIndex) => (
                <div
                  key={navIndex}
                  className={`carousel-nav-item ${index === navIndex ? 'active' : ''}`}
                >
                  <p className="carousel-nav-index">{`0${navIndex + 1}`}</p>
                  <p className="carousel-nav-title">{navItem.title}</p>
                  <p className="carousel-nav-subtitle">{navItem.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
