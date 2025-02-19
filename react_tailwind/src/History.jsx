import React, { useState } from "react";
import compassLogo from './compassLogo.png'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineCreditCard } from "react-icons/ai";
import { GiPiggyBank } from "react-icons/gi";


const History = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [option, setOption] = useState("")
        const [category, setCategory] = useState(null)
    
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
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white flex rounded-lg border border-gray-300 overflow-hidden">
                                    <select className="bg-dark-blue p-2 text-white font-semibold mx-auto text-sm focus:outline-none" required>
                                        <option value="1_week">Last 7 Days</option>
                                        <option value="1_month">Last Month</option>
                                        <option value="6_months">Last 6 Months</option>
                                        <option value="12_months">Last 12 Months</option>
                                    </select>
                                    <input className="bg-dark-blue text-white font-semibold text-sm px-2 border-l-2 border-bg-gray focus:outline-none date-white-icon" type="date" />
                                </div>
                                <div className="bg-white flex rounded-lg border border-gray-300 overflow-hidden">
                                    <select className="bg-dark-blue p-2 text-white font-semibold mx-auto text-sm focus:outline-none border-r-2 border-bg-gray"  onChange={(e)=> handleSelection(e.target.value)} required>
                                        <option value="" hidden>Type</option>
                                        <option value="income">Income</option>
                                        <option value="expense">Expense</option>
                                        <option value="saving">Saving</option>
                                        <option value="debt">Debt</option>
                                    </select>

                                    {option && (
                                    <select className="bg-dark-blue p-2 text-white font-semibold mx-auto text-sm focus:outline-none border-r-2 border-bg-gray" required>
                                        <option value="" hidden>Category</option>
                                        {/* FIX THE WIDTH OF THE OPTIONS SO IT DOES NOT STRETCH THE WIDTH OF THE INPUT */}
                                        {category.map((item) => (
                                            <option className="truncate" key={item} value={item.toLowerCase()}>{item}</option>
                                        ))}
                                    </select>)}

                                    <select className="bg-dark-blue p-2 text-white font-semibold mx-auto text-sm focus:outline-none" required>
                                        <option value="" hidden>Amount</option>
                                        <option value="50_99">1 - 99</option>
                                        <option value="100_299">100 - 299</option>
                                        <option value="300_599">300 - 599</option>
                                        <option value="600_999">600 - 999</option>
                                        <option value="1000_1999">1000 - 2499</option>
                                        <option value="2000_2999">2500 - 4999</option>
                                        <option value="3000_3999">5000+</option>
                                    </select>
                                </div>
                            </div>
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