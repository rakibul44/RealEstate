import React, { useEffect } from 'react'; // Import useEffect
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import area1 from '../assets/images/area1.jpg';
import area2 from '../assets/images/area2.jpg';
import area3 from '../assets/images/area3.jpg';

const PopularAreas = () => {
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

  return (
    <div className="w-full py-12 bg-pink-100">
      <h1 className="text-4xl font-semibold text-center mb-10 text-gray-800">Popular Areas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Area 1 */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"  // Stagger the delay for each area
          className="flex flex-col lg:flex-row items-center rounded-lg overflow-hidden shadow-lg bg-white p-4"
        >
          <div className="lg:w-1/2">
            <img
              src={area1}
              alt="Area 1"
              className="w-full h-[250px] object-cover rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800">Area 1</h2>
            <p className="text-sm text-gray-600 mt-2">
              Explore the vibrant community and local amenities in Area 1.
            </p>
            <div className="mt-4 text-gray-700">
              <p>⭐⭐⭐⭐☆ (4.5/5)</p>
              <p className="text-pink-600 font-semibold">Explore Now</p>
            </div>
          </div>
        </div>

        {/* Area 2 */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"  // Adjusted delay for the second area
          className="flex flex-col lg:flex-row items-center rounded-lg overflow-hidden shadow-lg bg-white p-4"
        >
          <div className="lg:w-1/2">
            <img
              src={area2}
              alt="Area 2"
              className="w-full h-[250px] object-cover rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800">Area 2</h2>
            <p className="text-sm text-gray-600 mt-2">
              A peaceful and family-friendly area with top-notch facilities.
            </p>
            <div className="mt-4 text-gray-700">
              <p>⭐⭐⭐⭐☆ (4.7/5)</p>
              <p className="text-pink-600 font-semibold">Explore Now</p>
            </div>
          </div>
        </div>

        {/* Area 3 */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"  // Adjusted delay for the third area
          className="flex flex-col lg:flex-row items-center rounded-lg overflow-hidden shadow-lg bg-white p-4"
        >
          <div className="lg:w-1/2">
            <img
              src={area3}
              alt="Area 3"
              className="w-full h-[250px] object-cover rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800">Area 3</h2>
            <p className="text-sm text-gray-600 mt-2">
              A dynamic and urban area perfect for work and leisure.
            </p>
            <div className="mt-4 text-gray-700">
              <p>⭐⭐⭐⭐☆ (4.6/5)</p>
              <p className="text-pink-600 font-semibold">Explore Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularAreas;
