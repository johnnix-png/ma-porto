export type VideoItem = {
  id: string;
  title: string;
  thumbUrl: string;
  embedUrl: string; // YouTube/Drive embed URL
};

export const HERO_VIDEO_URL = "/media/podcast edit v.1.mp4";

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/yourhandle',
  telegram: 'https://t.me/yourhandle',
  tiktok: 'https://www.tiktok.com/@yourhandle',
  email: 'mailto:you@example.com',
};

export const VIDEO_CATEGORIES: Record<'long' | 'short', VideoItem[]> = {
  long: [
    {
      id: 'yt1',
      title: 'Documentary Cut',
      thumbUrl: 'https://i.imgur.com/fGdfUoD.jpeg',
      embedUrl: 'https://www.youtube.com/embed/J_rrhrb1pQg'
    },
    {
      id: 'yt2',
      title: 'Interview Edit',
      thumbUrl: 'https://images.unsplash.com/photo-1512427691650-1f9b7f2c8b5d?w=600&q=80&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/oHg5SJYRHA0',
    },
     {
      id: 'yt3',
      title: 'Documentary Cut',
      thumbUrl: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?w=600&q=80&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/J_rrhrb1pQg'
    },
     {
      id: 'yt4',
      title: 'Documentary Cut',
      thumbUrl: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?w=600&q=80&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/J_rrhrb1pQg'
    },
     {
      id: 'yt5',
      title: 'Documentary Cut',
      thumbUrl: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?w=600&q=80&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/J_rrhrb1pQg'
    },
     {
      id: 'yt6',
      title: 'Documentary Cut',
      thumbUrl: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?w=600&q=80&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/J_rrhrb1pQg'
    },
     {
      id: 'yt7',
      title: 'Documentary Cut',
      thumbUrl: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?w=600&q=80&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/J_rrhrb1pQg'
    },
     {
      id: 'yt8',
      title: 'Documentary Cut',
      thumbUrl: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?w=600&q=80&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/J_rrhrb1pQg'
    },
     {
      id: 'yt9',
      title: 'Documentary Cut',
      thumbUrl: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?w=600&q=80&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/J_rrhrb1pQg'
    },
  ],
  short: [
    {
      id: 'yt3',
      title: 'Reel — Travel',
      thumbUrl: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?w=600&q=80&auto=format&fit=crop',
      embedUrl: 'https://www.youtube.com/embed/J_rrhrb1pQg'
    },
    {
      id: 'drv1',
      title: 'Product Teaser',
      thumbUrl: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=600&q=80&auto=format&fit=crop',
      embedUrl: 'https://drive.google.com/file/d/1F3y1nO8oHn9xZV8-EXAMPLE/preview',
    },
  ],
};

export type ImageItem = { id: string; title: string; imageUrl: string };

export const GRAPHIC_CATEGORIES: Record<'thumbnail' | 'poster' | 'logo', ImageItem[]> = {
  thumbnail: [
    { id: 't1', title: 'Tech Review', imageUrl: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&q=80&auto=format&fit=crop' },
    { id: 't2', title: 'Gaming Highlight', imageUrl: 'https://images.unsplash.com/photo-1520975954732-35dd22d5f8f0?w=800&q=80&auto=format&fit=crop' },
    { id: 't3', title: 'Lifestyle Vlog', imageUrl: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80&auto=format&fit=crop' },
  ],
  poster: [
    { id: 'p1', title: 'Event Poster', imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1000&q=80&auto=format&fit=crop' },
    { id: 'p2', title: 'Film Flyer', imageUrl: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=1000&q=80&auto=format&fit=crop' },
    { id: 'p3', title: 'Promo Graphic', imageUrl: 'https://images.unsplash.com/photo-1529336953121-a98b5e7e9eae?w=1000&q=80&auto=format&fit=crop' },
  ],
  logo: [
    { id: 'l1', title: 'Monogram', imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80&auto=format&fit=crop' },
    { id: 'l2', title: 'Abstract Mark', imageUrl: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=800&q=80&auto=format&fit=crop' },
    { id: 'l3', title: 'Wordmark', imageUrl: 'https://images.unsplash.com/photo-1520971721564-21f6a1b3b379?w=800&q=80&auto=format&fit=crop' },
  ],
};
