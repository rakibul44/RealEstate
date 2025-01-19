import React, { useEffect, useState } from 'react'; // Added useState for managing button click state
import aboutimg from '../assets/images/about.jpg';
import { useDarkMode } from '../components/DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });

    return () => {
      AOS.refresh(); // Ensures animations are applied on updates
    };
  }, []);

  const { darkMode } = useDarkMode();
  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <section
      className={`w-[95%] m-auto py-20 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
      data-aos="fade-up"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* About Image */}
        <div
          data-aos="fade-right"
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img
            src={aboutimg}
            alt="About Us"
            className="rounded-lg shadow-lg object-cover max-w-full"
          />
        </div>

        {/* About Text */}
        <div
          data-aos="fade-left"
          className="lg:w-1/2 w-full flex flex-col gap-5"
        >
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vulputate velit vel ligula fermentum, non consequat nisl vehicula.
            Integer sit amet tristique sapien. Phasellus nec nisl vel magna
            eleifend consectetur. Vivamus accumsan viverra quam at ultricies.
          </p>
          {isReadMore && (
            <p className="text-lg leading-7">
              Quisque eget neque at erat efficitur lacinia non ut justo.
              Curabitur pulvinar volutpat tortor at suscipit. Cras ac ligula
              euismod, sollicitudin erat nec, tincidunt nisl. Vivamus ac nisl
              eget neque eleifend laoreet. Mauris ultricies malesuada odio.
            </p>
          )}
          <button
            onClick={handleReadMore}
            data-aos="fade-up"
            className={`${
              darkMode
                ? 'bg-red-600 text-white hover:bg-black hover:text-red-600'
                : 'bg-black text-white hover:bg-red-600 hover:text-black'
            } mt-5 text-lg font-semibold py-2 px-5 rounded-full transition duration-300 ease-in-out`}
          >
            {isReadMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
