import React, { useState } from "react";
import compassLogo from './compassLogo.png';
// edit icon import
import { FiEdit3 } from "react-icons/fi";
// budget and debt section icons imports
import { FaHome, FaShoppingBasket, FaCar, FaHeartbeat, FaFilm, FaGift, FaBook, FaUtensils, FaLandmark, FaGraduationCap, FaCreditCard, FaUser, FaBriefcase, FaFileInvoiceDollar, FaMoneyBillWave } from "react-icons/fa";
// speedometer component and target imports
import Speedometer from "./Speedometer";
import { TbTargetArrow } from "react-icons/tb";

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
const savingItems = [
    { title: "Fix Car Transmission", startDate: "01 Jan 25", goalDate: "27 May 26", goalAmount: 250, currentAmount: 200 },
    { title: "Travel to Dubai", startDate: "01 Jan 25", goalDate: "27 May 26", goalAmount: 250, currentAmount: 10 },
    { title: "Buy New Laptop", startDate: "01 Jan 25", goalDate: "15 Aug 26", goalAmount: 1200, currentAmount: 300 },
    { title: "Home Renovation", startDate: "01 Feb 25", goalDate: "10 Dec 26", goalAmount: 5000, currentAmount: 750 },
    { title: "Learn a New Language", startDate: "01 Mar 25", goalDate: "01 Mar 26", goalAmount: 200, currentAmount: 50 },
    { title: "Upgrade Home Office", startDate: "01 Apr 25", goalDate: "01 Oct 26", goalAmount: 1500, currentAmount: 1000 },
];
const debtItems = [
    {
        icon: FaGraduationCap,
        title: "Student Loans",
        currentAmount: 200,
        color: "text-blue-500",
        description: "Includes federal and private student loans for tuition, books, housing, and other educational expenses."
    },
    {
        icon: FaCreditCard,
        title: "Credit Card Debt",
        currentAmount: 10,
        color: "text-red-500",
        description: "Debt from revolving credit cards, including unpaid balances, interest charges, and late fees."
    },
    {
        icon: FaHome,
        title: "Mortgage",
        currentAmount: 300,
        color: "text-green-500",
        description: "Home loan debt, including first and second mortgages, home equity loans, and refinancing balances."
    },
    {
        icon: FaUser,
        title: "Personal",
        currentAmount: 750,
        color: "text-purple-500",
        description: "Unsecured loans for personal use, such as debt consolidation, vacations, weddings, or emergencies."
    },
    {
        icon: FaCar,
        title: "Auto Loans",
        currentAmount: 50,
        color: "text-yellow-500",
        description: "Loans for purchasing or leasing a car, truck, or motorcycle, including financing and leasing agreements."
    },
    {
        icon: FaHeartbeat,
        title: "Medical Debt",
        currentAmount: 1000,
        color: "text-red-500",
        description: "Outstanding balances for medical expenses, including hospital bills, surgery, prescriptions, and emergency care."
    },
    {
        icon: FaBriefcase,
        title: "Business Loans",
        currentAmount: 1000,
        color: "text-red-900",
        description: "Loans taken to fund a business, including startup costs, operational expenses, and equipment purchases."
    },
    {
        icon: FaFileInvoiceDollar,
        title: "Tax Debt",
        currentAmount: 1000,
        color: "text-gray-500",
        description: "Unpaid federal, state, or local taxes, including income tax, property tax, and penalties for late payments."
    },
];
const totalDebt = debtItems.reduce((sum, item) => sum + item.currentAmount, 0);
// const totalDebt = 0;

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
                {/* budgeting section */}
                {/* will have budgeting goals per category with total budgeting goal listed, saving goals with total savings listed, debt per category like student loans, credit card loans etc with total debt listed */}
                <div className="w-full max-w-7xl mx-auto px-4">
                    <h1 className="text-gray-500 text-xl my-4">Budgeting Goals</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {budgetItems.map((item, index) => (
                        <div key={index}className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0">
                                        <item.icon className={`w-8 h-8 ${item.color}`} />
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
                {/* savings section */}
                <div className="w-full max-w-7xl mx-auto px-4">
                    <h1 className="text-gray-500 text-xl my-4">Savings Goals</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {savingItems.map((item, index) => (
                        <div key={index}className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-lg text-black">{item.title}</h1>
                                    <h1 className="text-gray-600 text-md">{item.startDate} - {item.goalDate}</h1>
                                </div>
                                <TbTargetArrow className="text-red-600 w-8 h-8" />
                            </div>
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-col my-4">
                                    <div className="flex flex-col my-2">
                                        <p className="font-bold text-base sm:text-lg">${item.currentAmount.toFixed(2)}</p>
                                        <p className="text-gray-600 text-base sm:text-md">Total Achieved</p>
                                    </div>
                                    <div className="flex flex-col my-2">
                                        <p className="font-bold text-base sm:text-lg">${item.goalAmount.toFixed(2)}</p>
                                        <p className="text-gray-600 text-base sm:text-md">Target Goal</p>
                                    </div>
                                </div>
                                {/* speedometer */}
                                <Speedometer value={item.currentAmount} maxValue={item.goalAmount} />
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="text-red-600 hover:text-red-900 hover:border-b-2 hover:border-red-900 text-md transition-colors duration-200">
                                    remove
                                </button>
                                <button className="flex-shrink-0 flex items-center gap-2 border-2 border-dark-blue rounded-lg p-2 text-dark-blue hover:text-blue-300 hover:border-blue-300 text-sm sm:text-base transition-colors duration-200">
                                    <span>Adjust</span>
                                    <FiEdit3 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                {/* debt section */}
                <div className="w-full max-w-7xl mx-auto px-4">
                    <h1 className="text-gray-500 text-xl my-4">Debt Tracking</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-center">
                            <div className="flex flex-col">
                                <div className="flex justify-center items-center gap-4">
                                    <FaMoneyBillWave className={`w-12 h-12 text-green-700`} />
                                    <h1 className="text-xl">Total Debt</h1>
                                </div>
                                <h1 className="font-bold text-base sm:text-2xl text-center my-4">${totalDebt.toFixed(2)}</h1>
                                {totalDebt <= 0 ? <h1 className="text-2xl text-center">Congratulations you are free of debt!</h1> : <h1 className="text-2xl text-center">One step closer to being free of debt!</h1>}
                            </div>
                        </div>
                        {debtItems.map((item, index) => (
                        <div key={index}className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex justify-center items-center gap-4">
                                <div className="flex-shrink-0">
                                    <item.icon className={`w-12 h-12 ${item.color}`} />
                                </div>
                                <h1 className="text-xl">{item.title}</h1>
                            </div>
                            <p className="font-bold text-base sm:text-lg text-center my-4">${item.currentAmount.toFixed(2)}</p>
                            <p className="text-md text-center">{item.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
                {/* resource section */}
                <div className="w-full max-w-7xl mx-auto px-4">
                    <h1 className="text-gray-500 text-xl my-4">Resources</h1>
                    <div className="flex text-center flex-col bg-white p-10 gap-8 rounded-lg shadow-sm hover:shadow-md">
                        <h1 className="text-2xl font-bold">User Resources</h1>
                        <div className="flex justify-evenly">
                            <div className="flex flex-col space-y-4">
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                            </div>
                            <div className="flex-flex-col space-y-4">
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                            </div>
                            <div className="flex-flex-col space-y-4">
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                                <p>blahblahblahblah</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Budget;