import React, { useMemo, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { VIDEO_CATEGORIES, VideoItem } from '@/content/portfolioData';
import Footer from '@/components/portfolio/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X } from 'lucide-react';

const VideoGallery: React.FC<{ items: VideoItem[]; onSelect: (v: VideoItem) => void }> = ({ items, onSelect }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((v) => (
      <button
        key={v.id}
        onClick={() => onSelect(v)}
        className="group relative overflow-hidden rounded-lg border border-border bg-card/70 backdrop-blur text-left focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label={`Play ${v.title}`}
      >
        <img
          src={v.thumbUrl}
          alt={`${v.title} thumbnail`}
          loading="lazy"
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-sm font-medium">{v.title}</p>
        </div>
      </button>
    ))}
  </div>
);

const Player: React.FC<{ url: string; onClose: () => void; portrait?: boolean }> = ({ url, onClose, portrait }) => (
  <div className="relative">
    <button
      onClick={onClose}
      aria-label="Close player"
      className="absolute -top-4 -right-4 z-10 rounded-full bg-background/80 backdrop-blur border border-border p-2 shadow hover:opacity-90"
    >
      <X className="h-5 w-5" />
    </button>
    <div
      className={`w-full overflow-hidden rounded-lg border border-border bg-black ${
        portrait ? 'aspect-[16/9]' : 'aspect-video'
      }`}
    >
      <iframe
        className="h-full w-full"
        src={url}
        title="Video player"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
);

const VideoEdit: React.FC = () => {
  const [selected, setSelected] = useState<VideoItem | null>(null);
  const [tab, setTab] = useState<'long' | 'short'>('long');

  const items = useMemo(() => VIDEO_CATEGORIES[tab], [tab]);

  // Scroll to top when component mounts (initial load)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab]);

  // Scroll to top when video player opens or closes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Video Editing Portfolio — Long & Short Form</title>
        <meta
          name="description"
          content="Browse long-form and short-form video editing work. Click a thumbnail to play the embedded video."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold">Video Edit</h1>
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <Tabs value={tab} onValueChange={(v) => setTab(v as 'long' | 'short')}>
          <TabsList className="mb-8">
            <TabsTrigger value="long">Long Form</TabsTrigger>
            <TabsTrigger value="short">Short Form</TabsTrigger>
          </TabsList>
          <TabsContent value="long">
            {selected ? (
              <Player url={selected.embedUrl} onClose={() => setSelected(null)} portrait={false} />
            ) : (
              <VideoGallery items={items} onSelect={setSelected} />
            )}
          </TabsContent>
          <TabsContent value="short">
            {selected ? (
              <Player url={selected.embedUrl} onClose={() => setSelected(null)} portrait />
            ) : (
              <VideoGallery items={items} onSelect={setSelected} />
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default VideoEdit;
