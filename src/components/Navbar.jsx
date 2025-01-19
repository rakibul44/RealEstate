import React from 'react';

const Navbar = () => {
  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <nav className="w-full bg-transparent text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">Brand</div>

        {/* Menu Items */}
        <ul className="flex gap-8 text-lg font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-red-500 transition duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* Add a hamburger menu icon here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


