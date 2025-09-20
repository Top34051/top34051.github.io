import React from 'react';

const DateDisplay = ({ date, className = "" }) => {
    if (!date) return null;

    return (
        <div className={`text-xs text-gray-500 ml-3 flex-shrink-0 ${className}`}>
            {date}
        </div>
    );
};

export default DateDisplay;
