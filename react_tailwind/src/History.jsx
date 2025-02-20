import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import compassLogo from './compassLogo.png'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineCreditCard } from "react-icons/ai";
import { GiPiggyBank } from "react-icons/gi";


const History = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [option, setOption] = useState("")
        const [category, setCategory] = useState(null)
        const [isFocused, setIsFocused] = useState(false);
    
        const toggleSidebar = () => setIsOpen(!isOpen);

        const incomeCategories = [
            "Employment (Salary/Bonus/Freelance)",
            "Investments (Interest/Dividends)",
            "Gifts",
            "Government (Benefits/Assistance)",
            "Other"
        ];
        
        const expenseCategories = [
            "Living (Rent/Utilities/Insurance)",
            "Transportation",
            "Healthcare",
            "Groceries",
            "Restaurant & Dining",
            "Entertainment",
            "Education",
            "Gifts",
            "Other"
        ];

        const debtCategories = [
            "Student Loans",
            "Credit Card Debt",
            "Mortgage",
            "Personal",
            "Auto Loans",
            "Medical Debt",
            "Business Loans",
            "Tax Debt"
        ];

        const savingCategories = [
            "Savings Balance",
            "Goals",
        ];

        const handleSelection = (value) => {
            if (value) {
                setOption(value);
                if (value === 'income') {
                    setCategory(incomeCategories);
                } else if (value === 'expense') {
                    setCategory(expenseCategories);
                } else if (value === 'saving') {
                    setCategory(savingCategories);
                } else if (value === 'debt') {
                    setCategory(debtCategories);
                };
            };
        };

        // MAKE ALL TRANSACTION DATA

    return (
        <>
            <div className="flex min-h-screen bg-bg-gray">
                {/* navbar */}
                <div className={`lg:w-1/5 w-[300px] fixed z-20 lg:relative bg-dark-blue text-white h-full flex flex-col lg:top-0 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}></div>
                    <div className={`lg:w-1/5 w-[300px] fixed z-20 bg-dark-blue text-white p-4 h-screen flex flex-col lg:top-0 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
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
                            <div className="flex flex-wrap gap-4">
                                <div className="flex rounded-lg border border-dark-blue overflow-hidden shadow-lg h-10">
                                    <select className="bg-input-blue p-2 text-dark-blue font-semibold mx-auto text-sm focus:outline-none" required>
                                        <option className="font-semibold" value="1_week">Last 7 Days</option>
                                        <option className="font-semibold" value="1_month">Last Month</option>
                                        <option className="font-semibold" value="6_months">Last 6 Months</option>
                                        <option className="font-semibold" value="12_months">Last 12 Months</option>
                                    </select>
                                    <input className="bg-input-blue text-dark-blue font-semibold text-sm px-2 border-l border-dark-blue focus:outline-none date-dark-blue-icon" type="date" />
                                </div>
                                <div className="flex rounded-lg border border-dark-blue overflow-hidden shadow-lg h-10">
                                    <select className="bg-input-blue p-2 text-dark-blue font-semibold mx-auto text-sm focus:outline-none border-r border-dark-blue"  onChange={(e)=> handleSelection(e.target.value)} required>
                                        <option className="font-semibold" value="" hidden>Type</option>
                                        <option className="font-semibold" value="income">Income</option>
                                        <option className="font-semibold" value="expense">Expense</option>
                                        <option className="font-semibold" value="saving">Saving</option>
                                        <option className="font-semibold" value="debt">Debt</option>
                                    </select>

                                    {option && (
                                    <select className="bg-input-blue p-2 text-dark-blue font-semibold mx-auto text-sm focus:outline-none border-r border-dark-blue w-[150px] truncate" required>
                                        <option value="" hidden>Category</option>
                                        {/* FIX THE WIDTH OF THE OPTIONS SO IT DOES NOT STRETCH THE WIDTH OF THE INPUT */}
                                        {category.map((item) => (
                                            <option className="font-semibold" key={item} value={item.toLowerCase()}>{item}</option>
                                        ))}
                                    </select>)}

                                    <select className="bg-input-blue p-2 text-dark-blue font-semibold mx-auto text-sm focus:outline-none" required>
                                        <option className="font-semibold" value="" hidden>Amount</option>
                                        <option className="font-semibold" value="50_99">1 - 99</option>
                                        <option className="font-semibold" value="100_299">100 - 299</option>
                                        <option className="font-semibold" value="300_599">300 - 599</option>
                                        <option className="font-semibold" value="600_999">600 - 999</option>
                                        <option className="font-semibold" value="1000_1999">1000 - 2499</option>
                                        <option className="font-semibold" value="2000_2999">2500 - 4999</option>
                                        <option className="font-semibold" value="3000_3999">5000+</option>
                                    </select>
                                </div>
                                <div className="flex overflow-hidden shadow-lg">
                                    <div className="relative z-10 w-fit h-fit">
                                        <button className="absolute right-1 w-10 h-10 flex items-center justify-center text-dark-blue cursor-pointer" onClick={() => setIsFocused(!isFocused)}>
                                            <FaSearch size={20} />
                                        </button>
                                        <input type="text" className={`h-10 border border-dark-blue text-dark-blue pr-12 text-sm tracking-widest outline-none rounded-lg transition-all duration-500 ease-in-out bg-input-blue placeholder-gray-700  ${isFocused ? 'w-64 px-4' : 'w-12'}`} placeholder="Type to Search..." onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}/>
                                    </div>
                                </div>
                                <div className="flex rounded-lg border border-dark-blue shadow-lg overflow-hidden h-10">
                                    <button className="bg-input-blue text-dark-blue w-24 font-semibold hover:bg-blue-300">Search</button>
                                </div>
                            </div>
                            {/* TABLE SECTION */}
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2 text-dark-blue text-sm font-semibold">Date</th>
                                        <th className="border px-4 py-2 text-dark-blue text-sm font-semibold">Type</th>
                                        <th className="border px-4 py-2 text-dark-blue text-sm font-semibold">Category</th>
                                        <th className="border px-4 py-2 text-dark-blue text-sm font-semibold">Amount</th>
                                        <th className="border px-4 py-2 text-dark-blue text-sm font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {data.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2 text-dark-blue text-sm">{item.date}</td>
                                            <td className="border px-4 py-2 text-dark-blue text-sm">{item.type}</td>
                                            <td className="border px-4 py-2 text-dark-blue text-sm">{item.category}</td>
                                            <td className="border px-4 py-2 text-dark-blue text-sm">{item.amount}</td>
                                            <td className="border px-4 py-2 text-dark-blue text-sm">{item.description}</td>
                                        </tr>
                                    ))} */}
                                </tbody>
                            </table>
                            <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full text-white">
                                <AiOutlineCreditCard size={24} />
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white">
                                <GiPiggyBank size={24} />
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full text-white">
                                <AiOutlineArrowUp size={24} />
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full text-white">
                                <AiOutlineArrowDown size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default History