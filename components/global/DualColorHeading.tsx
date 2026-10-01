import React from 'react';

interface DualColorHeadingProps {
  text: string;
  className?: string;
}

const DualColorHeading: React.FC<DualColorHeadingProps> = ({ text, className }) => {
  if (!text) return null;
  
  // Split by * to find parts to highlight
  const parts = text.split('*');
  
  return (
    <h2 className={className}>
      {parts.map((part, index) => (
        <span key={index} className={index % 2 === 1 ? 'text-zlendo-teal' : ''}>
          {part}
        </span>
      ))}
    </h2>
  );
};

export default DualColorHeading;
