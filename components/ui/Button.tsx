import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent to-secondary text-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] hover:scale-105",
    glow: "bg-primary border border-accent/50 text-accent shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:bg-accent hover:text-primary hover:shadow-[0_0_30px_rgba(0,212,255,0.6)]",
    secondary: "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:scale-105 border border-white/5",
    outline: "border border-white/20 text-white hover:border-accent hover:text-accent hover:bg-accent/5"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
      )}
    </motion.button>
  );
};

export default Button;