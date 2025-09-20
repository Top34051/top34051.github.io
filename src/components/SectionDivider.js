import React from 'react';

const SectionDivider = ({ className = "" }) => {
    return (
        <div className={`w-full my-6 ${className}`}>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
    );
};

export default SectionDivider;
