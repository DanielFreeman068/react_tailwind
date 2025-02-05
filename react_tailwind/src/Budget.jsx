import React, { useState } from "react";
import compassLogo from './compassLogo.png';
import { FiEdit3 } from "react-icons/fi";
import { FaHome, FaShoppingBasket, FaCar, FaHeartbeat, FaFilm, FaGift, FaBook, FaUtensils, FaLandmark } from "react-icons/fa";

const Budget = () => {
const [isOpen, setIsOpen] = useState(false);

const toggleSidebar = () => setIsOpen(!isOpen);

const budgetItems = [
    { icon: FaHome, title: "Housing", amount: 250, color: "text-gray-500" },
    { icon: FaHeartbeat, title: "Healthcare", amount: 250, color: "text-red-500" },
    { icon: FaCar, title: "Transportation", amount: 250, color: "text-yellow-500" },
    { icon: FaShoppingBasket, title: "Groceries", amount: 250, color: "text-green-500" },
    { icon: FaFilm, title: "Entertainment", amount: 250, color: "text-purple-500" },
    { icon: FaGift, title: "Gifts", amount: 250, color: "text-pink-500" },
    { icon: FaUtensils, title: "Restaurant & Dining", amount: 250, color: "text-red-400" },
    { icon: FaBook, title: "Education", amount: 250, color: "text-orange-500" },
    { icon: FaLandmark, title: "Government", amount: 250, color: "text-blue-600" }
];

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
        <div className="flex-1 p-4 w-4/5 transition-all duration-300 ease-in-out min-h-[100vh]">
            <div className="flex px-4 pt-4 justify-between border-b border-[#284b74] pb-5">
                <div className="flex items-center">
                    <button className="lg:hidden p-2 text-black text-3xl md:text-4xl mr-3" onClick={toggleSidebar}>☰</button>
                    <h1 className="text-dark-blue text-xl md:text-3xl">Budgeting</h1>
                </div>
                <div className="flex items-center">
                    <h1 className="text-dark-blue text-2xl mr-4">Daniel</h1>
                    <img className="h-12 w-auto rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.cEvbluCvNFD_k4wC3k-_UwHaHa&pid=Api" alt="profile"/>
                </div>
            </div>
            {/* main content */}
            <div className="flex flex-col gap-4 justify-center">
                {/* will have budgeting goals per category with total budgeting goal listed, saving goals with total savings listed, debt per category like student loans, credit card loans etc with total debt listed */}
                <div className="w-full max-w-7xl mx-auto px-4">
                    <h1 className="text-gray-500 text-xl my-4">Budgeting Goals</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {budgetItems.map((item, index) => (
                        <div key={index}className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0">
                                        <item.icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${item.color}`} />
                                    </div>
                                    <div className="flex flex-col min-w-0 max-w-[150px] lg:max-w-[110px] xl:max-w-[150px]">
                                        <h2 className="text-gray-500 text-sm sm:text-base truncate">{item.title}</h2>
                                        <p className="font-bold text-base sm:text-lg">${item.amount.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button className="flex-shrink-0 flex items-center gap-2 border-2 border-dark-blue rounded-lg p-2 text-dark-blue hover:text-blue-300 hover:border-blue-300 text-sm sm:text-base transition-colors duration-200">
                                    <span className="hidden custom-large:inline">Adjust</span>
                                    <FiEdit3 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="w-full max-w-7xl mx-auto px-4">
                    <h1 className="text-gray-500 text-xl my-4">Savings Goals</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {budgetItems.map((item, index) => (
                        <div key={index}className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0">
                                        <item.icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${item.color}`} />
                                    </div>
                                    <div className="flex flex-col min-w-0 max-w-[150px] lg:max-w-[110px] xl:max-w-[150px]">
                                        <h2 className="text-gray-500 text-sm sm:text-base truncate">{item.title}</h2>
                                        <p className="font-bold text-base sm:text-lg">${item.amount.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button className="flex-shrink-0 flex items-center gap-2 border-2 border-dark-blue rounded-lg p-2 text-dark-blue hover:text-blue-300 hover:border-blue-300 text-sm sm:text-base transition-colors duration-200">
                                    <span className="hidden custom-large:inline">Adjust</span>
                                    <FiEdit3 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Budget;