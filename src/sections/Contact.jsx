import React, { useEffect } from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  // Hook to initialize AOS and handle dark mode
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const { darkMode, toggoleDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} p-20`}>
      <section
        id="contact"
        className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      >
        <div data-aos="zoom-in" className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl">
          <h1 data-aos="fade-up" className="text-2xl text-black font-semibold dark:text-white">Send a message today</h1>

          <input
            type="text"
            placeholder="Enter your full name here"
            className="w-full px-6 border-2 border-gray-200 rounded-xl"
          />
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full px-6 border-2 border-gray-200 rounded-xl"
          />
          <input
            type="number"
            placeholder="Enter your phone number"
            className="w-full px-6 border-2 border-gray-200 rounded-xl"
          />
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Enter your message here..."
            className="w-full px-6 border-2 border-gray-200 rounded-xl"
          ></textarea>

          <button className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
            SEND EMAIL
          </button>
        </div>

        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1 data-aos="fade-left" className="text-red-500 dark:text-white">
            REACH US
          </h1>
          <p data-aos="fade-up" className="text-sm font-bold text-slate-600 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet purus a risus volutpat tincidunt non ac lorem. 
            Curabitur tempor metus id libero fringilla, ac vestibulum urna condimentum. Integer tempor auctor felis, et scelerisque dui
            dapibus nec. Fusce ut convallis lorem.
          </p>
          
          <p data-aos="fade-up" className="text-xs text-slate-600 dark:text-white">
            Mauris non dolor et metus luctus tempor. Quisque congue magna eu nisi ullamcorper, sit amet iaculis turpis facilisis. 
            Integer id tortor lectus. Nullam consectetur dui et nulla condimentum, nec scelerisque urna dictum. 
          </p>
          
          <button className="bg-red-600 w-ful text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
            SEND EMAIL
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
