import React from 'react';

interface RegisterButtonProps {
  url: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ 
  url, 
  className = '', 
  size = 'medium' 
}) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`
        inline-block bg-primary text-white font-bold rounded-lg 
        transition-all duration-300 hover:bg-blue-600 hover:shadow-lg 
        ${sizeClasses[size]} ${className}
      `}
    >
      Register Now
    </a>
  );
};

export default RegisterButton;
