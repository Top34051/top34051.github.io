import React from 'react';

const Card = ({ children, className = "" }) => {
    return (
        <div className={`border border-gray-200 bg-white rounded-xl shadow-sm p-4 flex flex-col h-full hover:shadow-lg hover:border-blue-300 hover:bg-gradient-to-br hover:from-white hover:to-blue-50 hover:-translate-y-1 transition-all duration-300 group ${className}`}>
            {children}
        </div>
    );
};

export default Card;
