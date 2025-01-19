import React, { useEffect } from 'react';
import { client } from '../components/export';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-transparent">
      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20"
      ></section>

      {/* Header Section */}
      <div className="flex flex-col justify-center items-start gap-4 pl-16 mb-8">
        <h1 data-aos="zoom-in" className="text-red-500">
          OUR CLIENTS
        </h1>
        <h1
          data-aos="zoom-in"
          className="text-black text-[40px] font-semibold leading-15"
        >
          What our Clients<br />saying about us
        </h1>
      </div>

      {/* Clients Box */}
      <div
        id="clients-box"
        className="grid lg:grid-cols-4 grid-cols-3 justify-center items-center gap-12 w-full pl-12 mb-12"
      >
        {client.map((item, index) => (
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            key={index}
            className="bg-white hover:bg-red-100 cursor-pointer p-8 flex flex-col justify-center items-center gap-6 rounded-xl w-full"
          >
            {/* Client Image */}
            <div className="flex justify-start items-center w-full gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-[70px] transform hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Client Name */}
            <h1 className="text-lg text-black font-semibold">
              {item.name}
            </h1>

            {/* Client Text */}
            <h1 className="text-sm text-slate-600">
              {item.text}
            </h1>

            {/* Client Feedback */}
            <p className="text-sm text-justify text-slate-600">
              {item.feedback}
            </p>

            {/* Client Rating */}
            <div className="flex justify-start items-center gap-2 w-full">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
