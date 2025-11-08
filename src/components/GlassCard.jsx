import React from 'react';

const GlassCard = ({ children, className = '' }) => {
  return (
    <div
      className={
        `rounded-2xl border backdrop-blur-md shadow-2xl ${className}`
      }
      style={{
        background: 'rgba(255,255,255,0.06)',
        borderColor: 'rgba(255,255,255,0.28)',
        boxShadow: '0 10px 24px rgba(0,0,0,0.28)'
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
