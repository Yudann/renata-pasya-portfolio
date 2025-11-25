import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full transition-all duration-300 text-sm font-medium tracking-wide";
  
  const variants = {
    primary: "bg-stone-800 text-white hover:bg-stone-700 hover:shadow-lg hover:shadow-stone-200",
    outline: "border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white",
    ghost: "text-stone-600 hover:text-stone-900 underline-offset-4 hover:underline"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};