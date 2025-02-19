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
                <img src={compassLogo} alt="Compass Logo" className="mx-auto w-[150px]" />
                <h2 className="text-2xl mb-4">Cash Compass</h2>
            </div>
            <ul>
                <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Dashboard</a></li>
                <li><a href="/forms" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Forms</a></li>
                <li><a href="/history" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">History</a></li>
                <li><a href="/budget" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Budgeting</a></li>
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
                will have about us and mission plus testimonals plus images and AOS
            </div>
        </div>
    </div>
    );
};

export default About;