import React, { useState } from "react";
import { IoReturnDownBack } from "react-icons/io5";
import compassLogo from './compassLogo.png'

const Forms = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("")
    const [formActive, setFormActive] = useState(false)

    function handleOption(variable){
        if(variable){
            setSelectedOption(variable)
            setFormActive(true)
        }
    }

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
                            <h1 className="text-dark-blue text-xl md:text-3xl">Forms</h1>
                        </div>
                        <div className="flex items-center">
                            <h1 className="text-dark-blue text-2xl mr-4">Daniel</h1>
                            <img className="h-12 w-auto rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.cEvbluCvNFD_k4wC3k-_UwHaHa&pid=Api" alt="profile"/>
                        </div>
                    </div>
                    {/* main content */}
                    {!formActive &&
                    <div className="flex flex-col justify-between mx-auto mt-20 gap-10 md:gap-20">
                        <div className="flex md:flex-row flex-col gap-10 md:gap-20 mx-auto">
                            <button className="bg-[url(./incomeMobile2.png)] md:bg-[url(./income.png)] bg-cover md:bg-cover w-[300px] h-[150px] md:h-[250px] lg:w-[350px] rounded-2xl flex shadow-md hover:shadow-lg transition-shadow duration-200" onClick={()=>handleOption("income")}>
                                <h1 className="text-4xl ml-8 mt-6 text-dark-blue">Income</h1>
                            </button>
                            <button className="bg-[url(./expenseMobile.png)] md:bg-[url(./expense.png)] bg-cover md:bg-cover w-[300px] h-[150px] md:h-[250px] lg:w-[350px] rounded-2xl flex shadow-md hover:shadow-lg transition-shadow duration-200" onClick={()=>handleOption("expense")}>
                                <h1 className="text-4xl ml-8 mt-6 text-dark-blue">Expense</h1>
                            </button>
                        </div>
                        <div className="flex md:flex-row flex-col gap-10 md:gap-20 mx-auto">
                            <button className="bg-[url(./savingsMobile.png)] md:bg-[url(./savings2.png)] bg-cover md:bg-cover w-[300px] h-[150px] md:h-[250px] lg:w-[350px] rounded-2xl flex shadow-md hover:shadow-lg transition-shadow duration-200" onClick={()=>handleOption("savings")}>
                                <h1 className="text-4xl ml-8 mt-6 text-dark-blue">Savings</h1>
                            </button>
                            <button className="bg-[url(./debtMobile.png)] md:bg-[url(./debt2.png)] bg-cover md:bg-cover w-[300px] h-[150px] md:h-[250px] lg:w-[350px] rounded-2xl flex shadow-md hover:shadow-lg transition-shadow duration-200" onClick={()=>handleOption("debt")}>
                                <h1 className="text-4xl ml-8 mt-6 text-dark-blue">Debt</h1>
                            </button>
                        </div>
                    </div>
                    }

                    {selectedOption === "income" && formActive &&
                    <div className="rounded-2xl bg-white max-w-[800px] min-h-[600px] border border-[#284b74] mx-auto p-4 mt-8">
                        <button className="text-gray flex items-center hover:text-dark-blue" onClick={() => setFormActive(false)}>
                            <IoReturnDownBack className="w-6 h-6" />
                        </button>
                        <div className="text-center flex flex-col w-5/6 mx-auto">
                            <h1 className="text-dark-blue text-xl md:text-3xl mt-6">Income</h1>
                            <div className="flex flex-col mt-2">
                                <label className="text-left text-md" htmlFor="income-source">Source *</label>
                                <select className="p-2 border border-gray-300 rounded-md text-gray-900 w-full mx-auto focus:outline-none focus:ring-1 focus:ring-[#284b74]" required>
                                    <option value="Employment">Employment (Salary/Bonus/Freelance)</option>
                                    <option value="Investments">Investments (Interest/Dividends)</option>
                                    <option value="Gifts">Gifts</option>
                                    <option value="Government">Government (Benefits/Assistance)</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="flex justify-between w-full mx-auto">
                                <input className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-3/6 mr-2 focus:outline-none focus:ring-1 focus:ring-[#284b74]" type="date" required />
                                <input className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-3/6 ml-2 focus:outline-none focus:ring-1 focus:ring-[#284b74]" type="number" placeholder="$" required />
                            </div>
                            <textarea className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-full h-[150px] mx-auto resize-none focus:outline-none focus:ring-1 focus:ring-[#284b74]" name="description" id="description" placeholder="Description..." required></textarea>
                            <button className="mt-6 p-2 rounded-md text-white w-full bg-dark-blue mx-auto hover:bg-hl-blue hover:text-dark-blue">Submit Transaction</button>
                        </div>
                    </div>
                    }
                    {selectedOption === "expense" && formActive &&
                    <div className="rounded-2xl bg-white max-w-[800px] min-h-[600px] border border-[#284b74] mx-auto p-4 mt-8">
                        <button className="text-gray flex items-center hover:text-dark-blue" onClick={() => setFormActive(false)}>
                            <IoReturnDownBack className="w-6 h-6" />
                        </button>
                        <div className="text-center flex flex-col gap-4 w-5/6 mx-auto">
                            <h1 className="text-dark-blue text-xl md:text-3xl mt-6">Expense</h1>
                            <select className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-full mx-auto focus:outline-none focus:ring-1 focus:ring-[#284b74]" required>
                                <option value="Living">Living (Rent/Utilities/Insurance)</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Groceries">Groceries</option>
                                <option value="Restaurant">Restaurant & Dining</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Education">Education</option>
                                <option value="Gifts">Gifts</option>
                                <option value="Other">Other</option>
                            </select>
                            <div className="flex justify-between w-full mx-auto">
                                <input className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-3/6 mr-2 focus:outline-none focus:ring-1 focus:ring-[#284b74]" type="date" required />
                                <input className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-3/6 ml-2 focus:outline-none focus:ring-1 focus:ring-[#284b74]" type="number" placeholder="$" required />
                            </div>
                            <textarea className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-full h-[150px] mx-auto resize-none focus:outline-none focus:ring-1 focus:ring-[#284b74]" name="description" id="description" placeholder="Description..." required></textarea>
                            <button className="mt-6 p-2 rounded-md text-white w-full bg-dark-blue mx-auto hover:bg-hl-blue hover:text-dark-blue">Submit Transaction</button>
                        </div>
                    </div>
                    }
                    {selectedOption === "savings" && formActive &&
                    <div className="rounded-2xl bg-white max-w-[800px] min-h-[600px] border border-[#284b74] mx-auto p-4 mt-8">
                        <button className="text-gray flex items-center hover:text-dark-blue" onClick={() => setFormActive(false)}>
                            <IoReturnDownBack className="w-6 h-6" />
                        </button>
                        <div className="text-center flex flex-col gap-4 mx-auto w-5/6 mb-4">
                            <h1 className="text-dark-blue text-xl md:text-3xl mt-6">Savings</h1>
                            <select className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-full mx-auto focus:outline-none focus:ring-1 focus:ring-[#284b74]" required>
                                <option value="Student">Savings Balance</option>
                                {/* goals dynamically displayed here */}
                            </select>
                            <select className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-full mx-auto focus:outline-none focus:ring-1 focus:ring-[#284b74]" required>
                                <option value="In">Into Savings</option>
                                <option value="Out">Out of Savings</option>
                            </select>
                            <div className="flex justify-between w-full mx-auto">
                                <input className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-3/6 mr-2 focus:outline-none focus:ring-1 focus:ring-[#284b74]" type="date" required />
                                <input className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-3/6 ml-2 focus:outline-none focus:ring-1 focus:ring-[#284b74]" type="number" placeholder="$" required />
                            </div>
                            <textarea className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-full h-[150px] mx-auto resize-none focus:outline-none focus:ring-1 focus:ring-[#284b74]" name="description" id="description" placeholder="Description..." required></textarea>
                            <button className="mt-6 p-2 rounded-md text-white w-full bg-dark-blue mx-auto hover:bg-hl-blue hover:text-dark-blue">Submit Transaction</button>
                        </div>
                    </div>
                    }
                    {selectedOption === "debt" && formActive &&
                    <div className="rounded-2xl bg-white max-w-[800px] min-h-[600px] border border-[#284b74] mx-auto p-4 mt-8">
                        <button className="text-gray flex items-center hover:text-dark-blue" onClick={() => setFormActive(false)}>
                            <IoReturnDownBack className="w-6 h-6" />
                        </button>
                        <div className="text-center flex flex-col gap-4 mx-auto w-5/6 mb-4">
                            <h1 className="text-dark-blue text-xl md:text-3xl mt-6">Debt</h1>
                            <select className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-full mx-auto focus:outline-none focus:ring-1 focus:ring-[#284b74]" required>
                                <option value="Student">Student Loans</option>
                                <option value="Credit">Credit Card Debt</option>
                                <option value="Mortgage">Mortgage</option>
                                <option value="Auto">Auto Loans</option>
                                <option value="Medical">Medical Debt</option>
                                <option value="Business">Business Loans</option>
                                <option value="Tax">Tax Debt</option>
                            </select>
                            <select className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-full mx-auto focus:outline-none focus:ring-1 focus:ring-[#284b74]" required>
                                <option value="Student">Adding to Debt</option>
                                <option value="Credit">Paying off Debt</option>
                            </select>
                            <div className="flex justify-between w-full mx-auto">
                                <input className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-3/6 mr-2 focus:outline-none focus:ring-1 focus:ring-[#284b74]" type="date" required />
                                <input className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-3/6 ml-2 focus:outline-none focus:ring-1 focus:ring-[#284b74]" type="number" placeholder="$" required />
                            </div>
                            <textarea className="mt-6 p-2 border border-gray-300 rounded-md text-gray-900 w-full h-[150px] mx-auto resize-none focus:outline-none focus:ring-1 focus:ring-[#284b74]" name="description" id="description" placeholder="Description..." required></textarea>
                            <button className="mt-6 p-2 rounded-md text-white w-full bg-dark-blue mx-auto hover:bg-hl-blue hover:text-dark-blue">Submit Transaction</button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Forms;