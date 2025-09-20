import React from 'react';

const ActionButton = ({
    children,
    onClick,
    href,
    variant = 'default',
    className = "",
    ...props
}) => {
    const baseClasses = "text-xs py-1.5 px-3 mr-2 font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md";

    const variants = {
        abstract: "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 hover:from-gray-200 hover:to-gray-100",
        paper: "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 hover:from-blue-200 hover:to-blue-100",
        code: "bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-700 hover:from-yellow-200 hover:to-yellow-100",
        website: "bg-gradient-to-r from-green-100 to-green-50 text-green-700 hover:from-green-200 hover:to-green-100",
        default: "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 hover:from-gray-200 hover:to-gray-100"
    };

    const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                <button className={buttonClasses} {...props}>
                    {children}
                </button>
            </a>
        );
    }

    return (
        <button className={buttonClasses} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default ActionButton;
