import React, { useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";
import s3 from "../assets/images/s3.jpg";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Find Your Dream Home",
      description: "Discover amazing properties that fit your lifestyle and budget.",
      image: s1,
    },
    {
      id: 2,
      title: "Luxury Apartments in the City",
      description: "Live in style with state-of-the-art amenities in prime locations.",
      image: s2,
    },
    {
      id: 3,
      title: "Commercial Spaces for Growth",
      description: "Boost your business with the perfect commercial properties.",
      image: s3,
    },
  ];

  const dropdownFields = [
    {
      label: "Looking For",
      options: ["Property Type", "House", "Apartment", "Commercial"],
    },
    {
      label: "Location",
      options: ["All Cities", "New York", "Los Angeles", "Chicago"],
    },
    {
      label: "Property Size",
      options: ["Bedrooms", "1", "2", "3", "4+"],
    },
    {
      label: "Your Budget",
      options: ["Max Price", "$100k", "$200k", "$300k", "$400k+"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[100vh] bg-white overflow-hidden">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex flex-shrink-0 justify-center items-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="text-center bg-opacity-50 bg-black text-white p-10 rounded-xl">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition"
        onClick={nextSlide}
      >
        ❯
      </button>

        {/* dropdown fileds */}
      <div className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-white/20 p-4 sm:p-6 md:p-8 rounded-t-lg shadow-md flex flex-wrap items-center justify-between">
        {dropdownFields.map((field, index) => (
          <div key={index} className="flex-1 text-center text-white mb-4 sm:mb-0 px-2">
            <h3 className="font-semibold text-base sm:text-lg md:text-xl">{field.label}</h3>
            <select
              className="mt-1 w-80 bg-transparent text-black p-2 text-center rounded-tr-lg rounded-bl-lg text-sm sm:text-base border-dotted border-2 border-seaBlue"
            >
              {field.options.map((option, i) => (
                <option key={i} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}

        <div className="w-full sm:w-auto text-center sm:mt-0">
          <button className="bg-white text-black py-2 px-5 mt-6 rounded-tr-lg rounded-bl-lg hover:bg-seaBlue/80 transition duration-200">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
