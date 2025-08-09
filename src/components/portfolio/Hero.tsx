import React from 'react';
import { HERO_VIDEO_URL } from '@/content/portfolioData';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        aria-label="Background video"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/80" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gradient">
          Creative Portfolio — Video Editing & Graphics
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground animate-fade-in">
          I craft engaging stories through motion and visuals. From dynamic short-form edits to polished long-form narratives and bold graphic design.
        </p>
      </div>
    </section>
  );
};

export default Hero;
