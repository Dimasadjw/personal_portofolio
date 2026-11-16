import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  const iconSrc = TechStackIcon?.startsWith('/') ? TechStackIcon : `/${TechStackIcon}`;

  return (
    <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl border border-white/5 hover:border-purple-500/30">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <img 
          src={iconSrc} 
          alt={`${Language} icon`} 
          className="relative h-14 w-14 md:h-16 md:w-16 object-contain p-1 transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-slate-300 font-semibold text-xs sm:text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-center">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;
