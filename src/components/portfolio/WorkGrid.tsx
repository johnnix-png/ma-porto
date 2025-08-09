import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clapperboard, Palette } from 'lucide-react';

const WorkGrid: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="work" className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <button
            onClick={() => navigate('/video-edit')}
            className="group rounded-lg border border-border bg-card/80 backdrop-blur p-8 md:p-10 min-h-40 md:min-h-48 text-left shadow hover:shadow-xl transition-all hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Open Video Edit portfolio"
          >
            <div className="flex items-center gap-3 mb-2">
              <Clapperboard className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="text-xl font-semibold">Video Edit</h3>
            </div>
            <p className="text-muted-foreground">Long & Short form video projects, curated selections.</p>
          </button>

          <button
            onClick={() => navigate('/graphics')}
            className="group rounded-lg border border-border bg-card/80 backdrop-blur p-8 md:p-10 min-h-40 md:min-h-48 text-left shadow hover:shadow-xl transition-all hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Open Graphics portfolio"
          >
            <div className="flex items-center gap-3 mb-2">
              <Palette className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="text-xl font-semibold">Graphics</h3>
            </div>
            <p className="text-muted-foreground">Thumbnails, posters, and logos — a clean, scrollable gallery.</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
