import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { property } from '../components/export';
import { FaBath, FaBed, FaMapMarkerAlt, FaVideo, FaCamera, FaUserCircle, FaSearch, FaPlus, FaHeart, FaSearchDollar } from "react-icons/fa";

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [iconColors, setIconColors] = useState({});
  const [bedColors, setBedColors] = useState({});
  const [bathColors, setBathColors] = useState({});
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  // Toggle icon colors for Add to Favorites, Like, and View Pricing
  const toggleIconColor = (id, icon) => {
    setIconColors((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [icon]: prev[id]?.[icon] === 'red' ? 'black' : 'red',
      },
    }));
  };

  // Toggle Bed color between red and black
  const toggleBedColor = (id) => {
    setBedColors((prev) => ({
      ...prev,
      [id]: prev[id] === 'red' ? 'black' : 'red',
    }));
  };

  // Toggle Bath color between red and black
  const toggleBathColor = (id) => {
    setBathColors((prev) => ({
      ...prev,
      [id]: prev[id] === 'red' ? 'black' : 'red',
    }));
  };

  // Filter properties based on the search query
  const filteredProperties = property.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section
        id="properties"
        className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10"
      >
        {/* Section Heading */}
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">PROPERTIES</h1>
          <h1 data-aos="zoom-in" className="text-black text-4xl font-semibold dark:text-white">
            Explore the latest
          </h1>
        </div>

        {/* Search Bar */}
        <div className="w-full flex justify-center items-center mt-6 mb-8">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, location or description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 dark:text-white" />
          </div>
        </div>

        {/* Property Grid */}
        <div
          id="grid-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {filteredProperties.length > 0 ? (
            filteredProperties.map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-delay={`${200 + index * 100}`}
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden w-full shadow-lg relative"
              >
                {/* Image Box */}
                <div
                  id="image-box"
                  className="bg-cover bg-center h-[250px] relative"
                  style={{ backgroundImage: `url(${item.images})` }}
                >
                  {/* Overlay Icons */}
                  <div className="absolute top-4 left-4 flex gap-2 items-center">
                    <FaMapMarkerAlt className="text-white text-xl" title="Location" />
                    <span className="text-white bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
                      {item.location}
                    </span>
                    <FaCamera className="text-white text-xl" title="Camera" />
                    <FaVideo className="text-white text-xl" title="Video" />
                  </div>

                  {/* Buttons: Featured, Sell, Active */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button className="bg-black text-white px-2 py-1 text-xs rounded">Featured</button>
                    <button className="bg-red-500 text-white px-2 py-1 text-xs rounded">Sell</button>
                    <button className="bg-green-500 text-white px-2 py-1 text-xs rounded">Active</button>
                  </div>
                </div>

                {/* Property Name and Short Description */}
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold dark:text-white">{item.name}</h2>
                  <p className="text-gray-500 dark:text-gray-300 mt-2">{item.description}</p>
                </div>

                {/* Property Info */}
                <div className="p-4 border-t dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <FaBed
                        className="cursor-pointer"
                        style={{ color: bedColors[item.id] || 'black' }}
                        onClick={() => toggleBedColor(item.id)}
                      />
                      <span>{item.bedrooms || 3} Beds</span>
                      <FaBath
                        className="cursor-pointer"
                        style={{ color: bathColors[item.id] || 'black' }}
                        onClick={() => toggleBathColor(item.id)}
                      />
                      <span>{item.bathrooms || 2} Baths</span>
                      <span className="text-gray-500 dark:text-gray-300">|</span>
                      <span>{item.squareFootage || 340} sq ft</span>
                    </div>
                    <span className="text-red-500 dark:text-red-400 font-bold">
                      {item.price || '340,000'}
                    </span>
                  </div>
                </div>

                {/* Description Text */}
                <div className="p-4 text-center text-gray-500 dark:text-gray-300">
                  Beautiful, updated, ground level Co-op apartment in the disable Bay Terrace neighborhood
                </div>

                {/* User Profile Icon and Name */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaUserCircle
                      className="text-xl cursor-pointer"
                      style={{ color: bedColors[item.id] || 'black' }}
                      onClick={() => toggleBedColor(item.id)}
                    />
                    <span className="text-gray-500 dark:text-gray-300 text-sm">
                      {['Alisha', 'John', 'David', 'Sophia', 'Emma'][index % 5]}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaPlus
                      className="text-lg cursor-pointer"
                      style={{ color: iconColors[item.id]?.FaPlus || 'black' }}
                      onClick={() => toggleIconColor(item.id, 'FaPlus')}
                      title="Add to Favorites"
                    />
                    <FaHeart
                      className="text-lg cursor-pointer"
                      style={{ color: iconColors[item.id]?.FaHeart || 'black' }}
                      onClick={() => toggleIconColor(item.id, 'FaHeart')}
                      title="Like Property"
                    />
                    <FaSearch
                      className="text-lg cursor-pointer"
                      style={{ color: iconColors[item.id]?.FaSearchDollar || 'black' }}
                      onClick={() => toggleIconColor(item.id, 'FaSearchDollar')}
                      title="View Pricing"
                    />
                  </div>
                </div>

                {/* View Button */}
                <div className="p-4 text-center">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded">
                    View 
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full text-center text-gray-500 dark:text-gray-300">
              No properties found matching your search.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;
