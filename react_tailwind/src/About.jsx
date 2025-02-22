import { useState, useEffect, useMemo } from "react";
import about1 from './aboutImage1.png'
import about2 from './aboutImage2.avif'
import about3 from './aboutImage3.avif'
import about4 from './aboutImage4.jpg'
import about5 from './aboutImage5.avif'

const About = () => {
    const images = useMemo(() => [about1, about2, about3, about4], []);
    const [visibleImages, setVisibleImages] = useState(images);

    // Function to update visible images based on screen width
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 800) {
                setVisibleImages(images.slice(0, 1));
            } else if (width < 1024) {
                setVisibleImages(images.slice(0, 2));
            } else if (width < 1280) {
                setVisibleImages(images.slice(0, 3));
            } else {
                setVisibleImages(images);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [images]);

return (
    <div className="flex min-h-screen bg-bg-gray flex-col">
        <div className="bg-dark-blue w-full flex flex-col h-[500px]">
            <div className="flex flex-col text-center gap-8 mt-10">
                <h1 className="text-[50px] text-white font-semibold">Cash Compass</h1>
                <p className="text-lg text-white max-w-[650px] mx-auto px-6">Take control of your finances with <span className="font-bold">Cash Compass</span>. 
                Track your spending, set budgets, and gain insights into your financial health—all in one place. 
                Start your journey towards smarter money management today!</p>
            </div>
            <div className="bg-dark-blue py-8">
                <div className="container mx-auto flex flex-wrap justify-center gap-4 px-4">
                    {visibleImages.map((src, index) => (
                    <img key={index} src={src} alt={`Gallery ${index + 1}`} className="rounded-lg shadow-md w-full max-w-[400px] md:max-w-[300px] object-cover"/>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-8 justify-center mx-auto w-[90%] sm:w-[80%] my-32 sm:my-18 md:my-14">
            <div className="flex flex-col gap-4 text-center md:text-start">
                <p className="text-3xl text-dark-blue font-semibold">Welcome To Your Financial Tracker!</p>
                <p className="text-xl text-gray-900">Get started with us and make an account or login.</p>
            </div>
            <div className="flex gap-6 flex-col md:flex-row items-center">
                <div className="flex flex-row md:flex-col gap-4 pr-0 md:pr-4 h-full">
                    <button className="rounded-3xl w-[180px] h-[40px] sm:w-[220px] sm:h-[44px] font-semibold text-white bg-dark-blue px-4 py-2 hover:bg-hl-blue hover:text-dark-blue">Login</button>
                    <button className="rounded-3xl w-[180px] h-[40px] sm:w-[220px] sm:h-[44px] border-2 border-dark-blue text-dark-blue font-semibold px-4 py-2 hover:bg-gray-300">Create an Account</button>
                </div>
                <p className="text-md lg:text-lg text-gray-900 py-6 md:border-l border-dark-blue px-4 sm:px-10"><span className="font-semibold text-dark-blue">Cash Compass</span> is a simple financial tool designed to help students manage their money with ease. It lets you track income, expenses, and spending patterns while providing clear summaries and customizable categories. With features like search, filters, and easy updates, <span className="font-semibold text-dark-blue">Cash Compass</span> makes budgeting effortless and empowers better financial decisions.</p>
            </div>
        </div>
    </div>
    );
};

export default About;