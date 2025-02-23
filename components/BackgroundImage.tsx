import React from 'react';

interface BackgroundImageProps {
  imageUrl: string;
  children?: React.ReactNode;
  className?: string;
}

const BackgroundImage = ({ imageUrl, children, className = '' }: BackgroundImageProps) => {
  return (
    <div 
      className={`relative ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;