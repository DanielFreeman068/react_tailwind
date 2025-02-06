import React from "react";

const Speedometer = ({ value, maxValue }) => {
const percentage = (value / maxValue) * 100;
const angle = (percentage / 100) * 180; // Map percentage to 0-180 degrees
const radius = 50;
const circumference = Math.PI * radius;
const progress = (percentage / 100) * circumference;

// Needle calculations
const needleLength = 40;
const radians = (angle * Math.PI) / 180; // Convert angle to radians
const x2 = 60 + needleLength * Math.cos(radians - Math.PI); // Adjusted for correct rotation
const y2 = 50 + needleLength * Math.sin(radians - Math.PI);

return (
    <div className="flex flex-col items-center">
    {/* SVG for the speedometer */}
    <svg width="150" height="100" viewBox="0 0 120 60">
        {/* Background semi-circle */}
        <path
        d="M 10 50 A 50 50 0 0 1 110 50"
        stroke="#e5e7eb"
        strokeWidth="10"
        fill="none"
        />
        {/* Progress semi-circle */}
        <path
        d="M 10 50 A 50 50 0 0 1 110 50"
        stroke="#10b981"
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        strokeLinecap="round"
        />
        {/* Needle */}
        <line x1="60" y1="50" x2={x2} y2={y2} stroke="#10b981" strokeWidth="2" />
    </svg>

    {/* Value in the center */}
    <div className="text-center">
        <div className="text-lg font-bold text-gray-700">{value}K</div>
        <div className="text-sm text-gray-500">Target vs Achievement</div>
    </div>

    {/* Labels */}
    <div className="flex justify-between w-full mt-2 text-sm">
        <span className="text-gray-500">0</span>
        <span className="text-gray-500">{maxValue}K</span>
    </div>
    </div>
);
};

export default Speedometer;
