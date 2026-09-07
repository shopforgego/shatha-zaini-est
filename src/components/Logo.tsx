import React from 'react';
import { storeConfig } from '../config/store';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-11 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex-shrink-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-purple-950 font-black shadow-lg shadow-amber-500/20 rounded-xl p-1.5 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <rect x="35" y="15" width="30" height="20" rx="4" fill="currentColor" /><path d="M25 35 L75 35 L80 85 L20 85 Z" fill="none" stroke="currentColor" strokeWidth="6" /><circle cx="50" cy="60" r="12" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-base sm:text-lg tracking-tight leading-tight">
          {storeConfig.storeNameAr}
        </span>
        <span className="text-[10px] opacity-75 font-medium">
          {storeConfig.companyNameAr}
        </span>
      </div>
    </div>
  );
};
