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
  // Min height 48px is ensured by py-4
  const baseStyles = "inline-flex items-center justify-center px-6 py-4 text-lg font-bold rounded-lg transition-all duration-200 shadow-md transform active:scale-95 cursor-pointer font-heading";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-orange-600 border-2 border-transparent",
    secondary: "bg-brand-navy text-white hover:bg-blue-900 border-2 border-transparent",
    outline: "bg-white text-brand-navy border-2 border-brand-navy hover:bg-brand-light",
    white: "bg-white text-brand-orange border-2 border-white hover:bg-gray-100"
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