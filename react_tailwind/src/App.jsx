import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('expenseIncome');

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      { label: "Income", data: [4000, 4500, 5000, 5500, 6000, 4000, 4500, 5000, 5500, 6000, 4000, 4500], backgroundColor: "rgba(54, 162, 235, 0.6)" },
      { label: "Expenses", data: [3000, 3200, 3300, 3400, 3500, 3900, 3000, 3200, 3300, 3400, 3500, 3900], backgroundColor: "rgba(255, 99, 132, 0.6)" },
    ],
  };

  const debtData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      { label: "Debt", data: [4000, 4500, 5000, 5500, 6000, 4000, 4500, 5000, 5500, 6000, 4000, 4500], backgroundColor: "rgba(0, 0, 0, 0.6)" },
    ],
  };

  const chartOptions = { responsive: true, plugins: { legend: { position: "top" }, title: { display: true, text: selectedOption === 'expenseIncome' ? "Income and Expenses Overview" : "Debt Overview" } } };

  // Handle the dropdown change
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Use the selected option to decide which data to display
  const chartDataActive = selectedOption === 'expenseIncome' ? chartData : debtData;

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Sample transaction data
  const transactions = [
    { id: 1, type: "income", amount: 2500, category: "Employment", date: "2025-01-26" },
    { id: 2, type: "expense", amount: -80, category: "Living", date: "2025-01-25" },
    { id: 3, type: "expense", amount: -120, category: "Groceries", date: "2025-01-24" },
    { id: 4, type: "income", amount: 500, category: "Investments", date: "2025-01-23" },
    { id: 5, type: "expense", amount: -45, category: "Transportation", date: "2025-01-22" },
    { id: 6, type: "expense", amount: -35, category: "Healthcare", date: "2025-01-21" },
    { id: 7, type: "expense", amount: -35, category: "Entertainment", date: "2025-01-20" },
    { id: 8, type: "income", amount: 500, category: "Gifts", date: "2025-01-19" },
    { id: 9, type: "expense", amount: -35, category: "Education", date: "2025-01-18" },
    { id: 10, type: "expense", amount: -35, category: "Restaurant", date: "2025-01-17" },
    { id: 11, type: "expense", amount: -35, category: "Other", date: "2025-01-16" },
    { id: 12, type: "income", amount: 500, category: "Government", date: "2025-01-15" }
  ];  

  return (
    <div className="flex min-h-screen bg-bg-gray">
      {/* navbar */}
      <div className={`lg:w-1/5 w-[300px] fixed lg:relative bg-dark-blue text-white h-full flex flex-col lg:top-0 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}></div>
      <div className={`lg:w-1/5 w-[300px] fixed bg-dark-blue text-white p-4 h-screen flex flex-col lg:top-0 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <button className="lg:hidden absolute top-4 right-4 text-white text-3xl" onClick={toggleSidebar}>&times;</button>
        <h2 className="text-2xl mb-4 flex justify-center">Logo</h2>
        <ul>
          <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Dashboard</a></li>
          <li><a href="/forms" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">Forms</a></li>
          <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">History</a></li>
          <li><a href="/" className="block py-2 px-4 rounded-md hover:bg-hl-blue hover:text-dark-blue">About Us</a></li>
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
            <h1 className="text-dark-blue text-xl md:text-3xl">Dashboard</h1>
          </div>
          <div className="flex items-center">
            <h1 className="text-dark-blue text-2xl mr-4">Daniel</h1>
            <img className="h-12 w-auto rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.cEvbluCvNFD_k4wC3k-_UwHaHa&pid=Api" alt="profile"/>
          </div>
        </div>
        {/* dashboard */}
        <div className="flex flex-col custom-large:flex-row gap-4">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-white p-4 rounded-lg shadow-md h-[200px] w-full">Box 1</div>
              <div className="bg-white p-4 rounded-lg shadow-md h-[200px] w-full">Box 2</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              {/* Dropdown */}
              <select value={selectedOption} onChange={handleChange} className="mb-4 p-2 border rounded">
                <option value="expenseIncome">Expense & Income</option>
                <option value="debt">Debt</option>
              </select>
              {/* Chart */}
              <Bar data={chartDataActive} options={chartOptions} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md h-[200px]">Box A</div>
              <div className="bg-white p-4 rounded-lg shadow-md h-[200px]">Box B</div>
            </div>
          </div>
          {/* transactions */}
          <div className="w-full height-full custom-large:w-[400px] bg-white rounded-lg shadow-md p-4 mt-4">
            <h2 className="text-xl font-semibold mb-4 text-dark-blue">Recent Transactions</h2>
            <div className="space-y-4 max-h-[800px] overflow-y-auto">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 border-b border-gray-100">
                  <div>
                    <p className="font-medium">{transaction.category}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <span className={`font-semibold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.type === 'income' ? '+' : ''}{transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;