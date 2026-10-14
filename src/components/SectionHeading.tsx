import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 md:mb-12 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-2 text-xs tracking-widest font-mono uppercase text-[#66FCF1] ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-4 h-px bg-[#45A29E]" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-['Barlow_Condensed'] font-bold uppercase text-[clamp(2rem,6vw,3rem)] tracking-tight text-white leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 font-['Barlow'] text-base sm:text-lg text-[#C5C6C7] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
