import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  onClick, 
  className = '', 
  fullWidth = false 
}) => {
  // "Huge, obvious, finger-friendly" styles
  const baseStyles = "inline-flex items-center justify-center px-6 py-4 text-lg font-bold rounded-lg transition-all duration-200 shadow-lg transform active:scale-95 cursor-pointer font-heading uppercase tracking-wide";
  
  const variants = {
    primary: "bg-wizard-red text-white hover:bg-red-600 border-2 border-transparent",
    secondary: "bg-white text-wizard-black hover:bg-gray-200 border-2 border-transparent",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-wizard-black",
    white: "bg-white text-wizard-red border-2 border-white hover:bg-gray-100"
  };

  const widthClass = fullWidth ? "w-full" : "w-full sm:w-auto";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;