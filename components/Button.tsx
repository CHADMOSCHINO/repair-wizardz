import React from 'react';
import { Link } from 'react-router-dom';

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
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded transition-all duration-200 uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "bg-wizard-red hover:bg-red-600 text-white focus:ring-wizard-red border border-transparent",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-white focus:ring-zinc-500 border border-zinc-700",
    outline: "bg-transparent hover:bg-wizard-red/10 text-wizard-red border-2 border-wizard-red focus:ring-wizard-red",
    white: "bg-white text-black hover:bg-gray-200 focus:ring-white border border-transparent"
  };

  const widthClass = fullWidth ? "w-full" : "";
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