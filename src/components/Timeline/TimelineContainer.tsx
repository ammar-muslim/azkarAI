import React from 'react';

interface TimelineContainerProps {
  children: React.ReactNode;
  isDark: boolean;
}

export function TimelineContainer({ children, isDark }: TimelineContainerProps) {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-center mb-12"></div>
      
      {/* تغيير لون التايم لاين إلى أبيض */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
        isDark ? 'bg-white' : 'bg-white'
      }`} />
    
        {children}
        
        

    </div>
  );
}
