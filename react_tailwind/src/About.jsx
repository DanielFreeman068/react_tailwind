import React, { useState } from "react";
import compassLogo from './compassLogo.png';

const About = () => {
const [isOpen, setIsOpen] = useState(false);

const toggleSidebar = () => setIsOpen(!isOpen);

return (
    <div className="flex min-h-screen bg-bg-gray">
        {/* navbar */}
        <div className={`lg:w-1/5 w-[300px] fixed lg:relative bg-dark-blue text-white h-full flex flex-col lg:top-0 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}></div>
        <div className={`lg:w-1/5 w-[300px] fixed bg-dark-blue text-white p-4 h-screen flex flex-col lg:top-0 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
            <button className="lg:hidden absolute top-4 right-4 text-white text-3xl" onClick={toggleSidebar}>&times;</button>
            <div className="text-center">
                <img src={compassLogo} alt="Compass Logo" className="mx-auto w-[200px]" />
                <h2 className="text-2xl mb-4">Cash Compass</h2>
            </div>
            <ul>
                <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Dashboard</a></li>
                <li><a href="/forms" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Forms</a></li>
                <li><a href="/history" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">History</a></li>
                <li><a href="/about" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">About Us</a></li>
            </ul>
            <div className="flex-grow" />
            <div className="mb-4">
                <ul>
                    <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Profile</a></li>
                    <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Logout</a></li>
                </ul>
            </div>
        </div>
        {/* header */}
        <div className="flex-1 w-4/5 transition-all duration-300 ease-in-out min-h-[100vh]">
            <div className="flex px-4 pt-4 justify-between border-b border-[#284b74] pb-5">
                <div className="flex items-center">
                    <button className="lg:hidden p-2 text-black text-3xl md:text-4xl mr-3" onClick={toggleSidebar}>☰</button>
                    <h1 className="text-dark-blue text-xl md:text-3xl">About us</h1>
                </div>
                <div className="flex items-center">
                    <h1 className="text-dark-blue text-2xl mr-4">Daniel</h1>
                    <img className="h-12 w-auto rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.cEvbluCvNFD_k4wC3k-_UwHaHa&pid=Api" alt="profile"/>
                </div>
            </div>
            {/* main content */}
            <div className="flex flex-col custom-large:flex-row gap-4">
                <div className="flex flex-col w-full items-center justify-center py-10 bg-dark-blue bg-opacity-70 text-white">
                    {/* Logo */}
                    <div className="mb-6">
                        <div className="w-100 h-100 flex items-center justify-center">
                            <img src={compassLogo} alt="Compass Logo" className="mx-auto w-[200px]" />
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-2xl text-gray-900 font-bold text-center">
                        Welcome to your all-in-one Financial Tracker
                    </h1>
                    <p className="text-lg text-gray-900 font-bold text-center mt-2 text-gray-300">
                        The world’s leading Financial Platform
                    </p>
                    {/* should the form just be a button taking you to the signup and if youre already logged in it just says something else and if so what would it be. unless you can only do the about page when youre not logged in but then the nav would need profile and nav links t taken out and logout to switch to login or signup */}
                    {/* Signup Form */}
                    <div className="mt-6 flex flex-col items-center w-full max-w-md">
                        <div className="flex w-full bg-white rounded-full overflow-hidden">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 px-4 py-3 text-black outline-none"
                        />
                        <button className="bg-dark-blue px-3 py-3 rounded-full text-white hover:bg-hl-blue hover:text-dark-blue">
                            Sign Up for Cash Compass →
                        </button>
                        </div>
                    </div>

                    {/* Trusted Organizations */}
                    <p className="mt-8 text-sm text-gray-300">↓ Trusted by the world's leading organizations ↓</p>
                    <div className="flex space-x-4 mt-4">
                        {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-12 h-12 bg-gray-500 rounded-md"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default About;