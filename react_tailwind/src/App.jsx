import React, { useState } from 'react';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-bg-gray">
      {/* Sidebar for large and small screens */}
      <div
        className={`lg:w-1/5 w-[300px] absolute lg:relative bg-dark-blue text-white p-4 h-full flex flex-col transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {/* Close button */}
        <button className="lg:hidden absolute top-4 right-4 text-white text-3xl" onClick={toggleSidebar}>&times;</button>

        <h2 className="text-2xl mb-4 flex justify-center">Logo</h2>
        <ul>
          <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Home</a></li>
          <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">About</a></li>
          <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Services</a></li>
          <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Contact</a></li>
        </ul>

        {/* Spacer to push profile and logout buttons to the bottom */}
        <div className="flex-grow" />

        {/* Profile and Logout buttons */}
        <div className="mb-4">
          <ul>
            <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Profile</a></li>
            <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Logout</a></li>
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 p-4 transition-all duration-300 ease-in-out`}>
        {/* Hamburger Button (for small screens) */}
        <div className='flex justify-between border-b border-[#284b74] pb-5'>
          <div className='flex items-center'>
            <button className="lg:hidden p-2 text-black text-3xl md:text-4xl mr-3" onClick={toggleSidebar}>☰</button>
            <h1 className='text-dark-blue text-xl md:text-3xl'>Dashboard</h1>
          </div>
          <div className='flex items-center'>
            <h1 className='text-dark-blue text-2xl mr-4'>Daniel</h1>
            <img className='h-12 w-auto rounded-full' src="https://tse1.mm.bing.net/th?id=OIP.cEvbluCvNFD_k4wC3k-_UwHaHa&pid=Api" alt="profile" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">stuff</h1>
        <p>Content...</p>
      </div>
    </div>
  );
};

export default Dashboard;