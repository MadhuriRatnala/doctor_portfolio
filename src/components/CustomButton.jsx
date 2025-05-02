import React from "react";

const CustomButton = ({ children, color = 'blue', onClick, className = '' }) => {
  const colorStyles = {
    blue: 'bg-blue-600 hover:bg-blue-700 text-white',
    green: 'bg-green-600 hover:bg-green-700 text-white',
    red: 'bg-red-600 hover:bg-red-700 text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${colorStyles[color] || colorStyles.blue} ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;