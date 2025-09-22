export type VideoItem = {
  id: string;
  title: string;
  thumbUrl: string;
  embedUrl: string; // YouTube/Drive embed URL
  isVideoFile?: boolean;
};

export const HERO_VIDEO_URL = "https://res.cloudinary.com/dti4mtjlf/video/upload/v1754897894/vidhero_m10nmp.mp4";

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
      title: 'Faceless',
      thumbUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1758536089/Screenshot_25_ktdfn4.png',
     embedUrl: 'https://www.youtube.com/embed/Dx9fCECSbz4',
  isVideoFile: true  // Add this flag to differentiate from iframe URLs
    },
    {
      id: 'yt1',
      title: 'Podcast',
      thumbUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1754900190/web_thumb_podcast_ezqoaw.jpg',
     embedUrl: 'https://www.youtube.com/embed/J_rrhrb1pQg?si=DR1FFKZEXDpzr2SO',
  isVideoFile: true  // Add this flag to differentiate from iframe URLs
    },
    {
      id: 'yt1',
      title: 'Explainer',
      thumbUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1755158188/ex_a9wmre.jpg',
     embedUrl: 'https://www.youtube-nocookie.com/embed/6NnHPCIEvSw?rel=0&modestbranding=1',

  isVideoFile: true  // Add this flag to differentiate from iframe URLs
    },
    
  ],
  short: [
    {
      id: 'yt2',
      title: 'Reel',
      thumbUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1758264804/image_2025-09-19_095322268_wa9xg8.png',
      embedUrl: 'https://www.youtube.com/embed/_EH4arjuuSc',
    },
     
    {
      id: 'yt3',
      title: 'Tiktok',
      thumbUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1758002424/image_2025-09-16_090023266_acgttt.png',
      embedUrl: 'https://www.youtube.com/embed/AfP02MkW1G8',
    },
    {
      id: 'yt1',
      title: 'Tiktok',
      thumbUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1754900597/promo_clip_ivvhxt.jpg',
      embedUrl: 'https://www.youtube.com/embed/iov0I9QGsks'
    },
     {
      id: 'yt2',
      title: 'Voiceover',
      thumbUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1754901169/ENDK_yolufp.jpg',
      embedUrl: 'https://www.youtube.com/embed/IRG6pEpvjg4',
    },
     {
      id: 'yt1',
      title: 'Tiktok',
      thumbUrl: ' https://res.cloudinary.com/dti4mtjlf/image/upload/v1756361282/musa_hu3vqq.png',
      embedUrl: 'https://www.youtube.com/embed/MgyacS5_B8Y'
    },
   
    
   
    
     
  ],
};

export type ImageItem = { id: string; title: string; imageUrl: string };

export const GRAPHIC_CATEGORIES: Record<'thumbnail' | 'poster' | 'logo', ImageItem[]> = {
  thumbnail: [
    { id: 't1', title: 'Tech Review', imageUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1754897700/Vector_of_coming_soon_perfect_for_additional_design_coming_soon_design_etc___Premium_Vector_dnfnum.jpg' },
    { id: 't2', title: 'Gaming Highlight', imageUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1754897700/Vector_of_coming_soon_perfect_for_additional_design_coming_soon_design_etc___Premium_Vector_dnfnum.jpg' },
    { id: 't3', title: 'Lifestyle Vlog', imageUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1754897700/Vector_of_coming_soon_perfect_for_additional_design_coming_soon_design_etc___Premium_Vector_dnfnum.jpg' },
  ],
  poster: [
    { id: 'p1', title: 'Furniture poster', imageUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1758002106/netsi_challenge_y2wm3x.jpg' },
    { id: 'p2', title: 'Film Flyer', imageUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1758002126/jegenit_xmyvbs.jpg' },
    { id: 'p3', title: 'Promo Graphic', imageUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1754897700/Vector_of_coming_soon_perfect_for_additional_design_coming_soon_design_etc___Premium_Vector_dnfnum.jpg' },
  ],
  logo: [
    { id: 'l1', title: 'Monogram', imageUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1754897700/Vector_of_coming_soon_perfect_for_additional_design_coming_soon_design_etc___Premium_Vector_dnfnum.jpg' },
    { id: 'l2', title: 'Abstract Mark', imageUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1754897700/Vector_of_coming_soon_perfect_for_additional_design_coming_soon_design_etc___Premium_Vector_dnfnum.jpg' },
    { id: 'l3', title: 'Wordmark', imageUrl: 'https://res.cloudinary.com/dti4mtjlf/image/upload/v1754897700/Vector_of_coming_soon_perfect_for_additional_design_coming_soon_design_etc___Premium_Vector_dnfnum.jpg' },
  ],
};
