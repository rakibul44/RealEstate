import React, { useEffect } from 'react'; // Added useEffect import
import { useDarkMode } from '../components/DarkModeContext';
import heroimg from '../assets/images/hero2.webp';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh(); // Refresh AOS to apply animations to dynamically loaded elements
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? 'bg-black' : 'bg-white'}>
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
        style={{
          backgroundImage: `url(${heroimg})`,
          backgroundSize: 'cover', // Use 'cover' to fill the area without repeating
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', // Ensure background image doesn't repeat
        }}
        data-aos="fade-up" // Apply fade-up animation to the entire hero section
      >
        <h1
          data-aos="zoom-in"
          className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[60px]"
        >
          Find your next Home in Las Vegas
        </h1>
        <p
          data-aos="fade-up"
          className="text-white text-xl lg:pr-[500px] pr-0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt amet
          adipisci repellendus quam aliquid praesentium doloribus atque libero
          ullam ab nesciunt, exercitationem soluta ratione velit est autem
          neque sequi recusandae!
        </p>
      </section>

      {/* Form Section */}
      <div className={`${darkMode ? 'bg-black' : 'bg-transparent'} z-10`}>
        <div
          data-aos="fade-up"
          id="form"
          className={`${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        >
          {/* Location Input */}
          <div
            data-aos="fade-up"
            className="w-full"
          >
            <h1 className="text-black font-semibold dark:text-white">LOCATION</h1>
            <input
              type="text"
              placeholder="Enter an address, state, city or pincode"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>

          {/* Type Dropdown */}
          <div
            data-aos="fade-up"
            className="w-full"
          >
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="selectOptions"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select Property
              </option>
              <option value="Option1">Rentals</option>
              <option value="Option2">Sales</option>
              <option value="Option3">Commercial</option>
            </select>
          </div>

          {/* Category Dropdown */}
          <div
            data-aos="fade-up"
            className="w-full"
          >
            <h1 className="text-black font-semibold dark:text-white">CATEGORY</h1>
            <select
              name="selectOptions"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
              defaultValue=""
            >
              <option value="" disabled>
                Property Category
              </option>
              <option value="Option1">Apartments</option>
              <option value="Option2">Duplex</option>
              <option value="Option3">Condos</option>
            </select>
          </div>

          {/* Submit Button */}
          <div
            data-aos="fade-up"
            className="w-full"
          >
            <button
              className="bg-red-600 dark:bg-red-700 dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-y-110 transition-transform duration-300"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
