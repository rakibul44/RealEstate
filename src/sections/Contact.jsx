import React, { useEffect } from 'react';
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

  // Data for form fields
  const formFields = [
    { type: 'text', placeholder: 'Enter your full name here' },
    { type: 'email', placeholder: 'Enter your email here' },
    { type: 'number', placeholder: 'Enter your phone number' },
  ];

  return (
    <div className="p-20 bg-red-100">
      <section
        id="contact"
        className="lg:w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10 bg-white"
      >
        {/* Form Section */}
        <div
          data-aos="zoom-in"
          className="bg-white p-10 flex flex-col justify-center items-start gap-4 rounded-xl shadow-lg"
        >
          <h1 data-aos="fade-up" className="text-2xl text-black font-semibold">
            Send a message today
          </h1>

          {formFields.map((field, index) => (
            <input
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full px-6 border-2 border-gray-200 rounded-xl"
            />
          ))}

          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Enter your message here..."
            className="w-full px-6 border-2 border-gray-200 rounded-xl"
          ></textarea>

          <button className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black cursor-pointer">
            SEND EMAIL
          </button>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1 data-aos="fade-left" className="text-red-500">
            REACH US
          </h1>
          <p data-aos="fade-up" className="text-sm font-bold text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet purus a risus volutpat tincidunt non ac lorem. 
            Curabitur tempor metus id libero fringilla, ac vestibulum urna condimentum. Integer tempor auctor felis, et scelerisque dui
            dapibus nec. Fusce ut convallis lorem.
          </p>

          <p data-aos="fade-up" className="text-xs text-slate-600">
            Mauris non dolor et metus luctus tempor. Quisque congue magna eu nisi ullamcorper, sit amet iaculis turpis facilisis. 
            Integer id tortor lectus. Nullam consectetur dui et nulla condimentum, nec scelerisque urna dictum. 
          </p>

          <button className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black cursor-pointer">
            SEND EMAIL
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
