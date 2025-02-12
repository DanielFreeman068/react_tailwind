import React, { useState } from "react";
import compassLogo from './compassLogo.png'

const History = () => {
        const [isOpen, setIsOpen] = useState(false);
    
        const toggleSidebar = () => setIsOpen(!isOpen);
    return (
        <>
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
                <div className="flex-1 p-4 w-4/5 transition-all duration-300 ease-in-out min-h-[100vh]">
                    <div className="flex justify-between border-b border-[#284b74] pb-5">
                        <div className="flex items-center">
                            <button className="lg:hidden p-2 text-black text-3xl md:text-4xl mr-3" onClick={toggleSidebar}>☰</button>
                            <h1 className="text-dark-blue text-xl md:text-3xl">History</h1>
                        </div>
                        <div className="flex items-center">
                            <h1 className="text-dark-blue text-2xl mr-4">Daniel</h1>
                            <img className="h-12 w-auto rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.cEvbluCvNFD_k4wC3k-_UwHaHa&pid=Api" alt="profile"/>
                        </div>
                    </div>
                    {/* main content */}
                    {/* FILTER SECTION */}
                    <div className="flex justify-between mt-4">
                        <div className="w-full max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-white flex rounded-lg border border-gray-300 overflow-hidden space-x-2">
                                    <select className="bg-white p-2 text-gray-900 mx-auto text-sm" required>
                                        <option value="1_week">7 Days</option>
                                        <option value="1_month">1 Month</option>
                                        <option value="6_months">6 Months</option>
                                        <option value="12_months">12 Months</option>
                                    </select>
                                    <input className="bg-white text-sm border-l-2 border-r-2 border-gray-300 px-2" type="date" />
                                    <input className="bg-white text-sm px-2" type="date" />
                                </div>
                                <div className="bg-white flex rounded-lg border border-gray-300 overflow-hidden space-x-2">
                                    <select className="bg-white p-2 text-gray-900 mx-auto text-sm" required>
                                        <option value="1_week">7 Days</option>
                                        <option value="1_month">1 Month</option>
                                        <option value="6_months">6 Months</option>
                                        <option value="12_months">12 Months</option>
                                    </select>
                                    <input className="bg-white text-sm border-l-2 border-r-2 border-gray-300 px-2" type="date" />
                                    <input className="bg-white text-sm px-2" type="date" />
                                </div>
                                <div className="bg-white flex rounded-lg border border-gray-300 overflow-hidden space-x-2">
                                    <select className="bg-white p-2 text-gray-900 mx-auto text-sm" required>
                                        <option value="1_week">7 Days</option>
                                        <option value="1_month">1 Month</option>
                                        <option value="6_months">6 Months</option>
                                        <option value="12_months">12 Months</option>
                                    </select>
                                    <input className="bg-white text-sm border-l-2 border-r-2 border-gray-300 px-2" type="date" />
                                    <input className="bg-white text-sm px-2" type="date" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default History