import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { GRAPHIC_CATEGORIES, ImageItem } from '@/content/portfolioData';
import Footer from '@/components/portfolio/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X } from 'lucide-react';

const ImageGrid: React.FC<{ items: ImageItem[]; onSelect: (i: ImageItem) => void }> = ({ items, onSelect }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((img) => (
      <button
        key={img.id}
        onClick={() => onSelect(img)}
        className="group relative overflow-hidden rounded-lg border border-border bg-card/70 backdrop-blur text-left focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label={`Open ${img.title}`}
      >
        <img
          src={img.imageUrl}
          alt={img.title}
          loading="lazy"
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-sm font-medium">{img.title}</p>
        </div>
      </button>
    ))}
  </div>
);

const Lightbox: React.FC<{ src: string; alt: string; onClose: () => void }> = ({ src, alt, onClose }) => (
  <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
    <button onClick={onClose} aria-label="Close image" className="absolute top-6 right-6 rounded-full bg-background/80 backdrop-blur border border-border p-2 shadow hover:opacity-90">
      <X className="h-5 w-5" />
    </button>
    <img src={src} alt={alt} className="max-h-[85vh] w-auto rounded-md border border-border shadow" loading="eager" />
  </div>
);

const Graphics: React.FC = () => {
  const [tab, setTab] = useState<'thumbnail' | 'poster' | 'logo'>('thumbnail');
  const [active, setActive] = useState<ImageItem | null>(null);
  const items = useMemo(() => GRAPHIC_CATEGORIES[tab], [tab]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Graphics Portfolio — Thumbnails, Posters, Logos</title>
        <meta name="description" content="Explore design galleries for thumbnails, posters/flyers, and logo work. Click to view full-size with a simple overlay." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold">Graphics</h1>
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <Tabs value={tab} onValueChange={(v) => setTab(v as 'thumbnail' | 'poster' | 'logo')}>
          <TabsList className="mb-8 flex flex-wrap gap-2">
            <TabsTrigger value="thumbnail">Thumbnail Design</TabsTrigger>
            <TabsTrigger value="poster">Poster / Flyer Design</TabsTrigger>
            <TabsTrigger value="logo">Logo Design</TabsTrigger>
          </TabsList>
          <TabsContent value="thumbnail">
            <ImageGrid items={GRAPHIC_CATEGORIES.thumbnail} onSelect={setActive} />
          </TabsContent>
          <TabsContent value="poster">
            <ImageGrid items={GRAPHIC_CATEGORIES.poster} onSelect={setActive} />
          </TabsContent>
          <TabsContent value="logo">
            <ImageGrid items={GRAPHIC_CATEGORIES.logo} onSelect={setActive} />
          </TabsContent>
        </Tabs>
      </main>

      {active && (
        <Lightbox src={active.imageUrl} alt={active.title} onClose={() => setActive(null)} />
      )}

      <Footer />
    </div>
  );
};

export default Graphics;
