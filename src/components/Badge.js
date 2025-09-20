import React from 'react';

const Badge = ({ children, className = "" }) => {
    return (
        <span className={`text-xs py-1 px-2 mb-1 bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-800 rounded-full inline-block font-medium shadow-sm ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
