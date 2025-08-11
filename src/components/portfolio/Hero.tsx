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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white-glow">
          Your Next Video Editor & Graphics Designer
        </h1>
        <p className="max-w-2xl text-base md:text-lg   animate-fade-in text-grey-glow">
          I am a self-learner who has developed skills through YouTube and free resources Please take a look at my projects and form your own opinion
        </p>
      </div>
    </section>
  );
};

export default Hero;
