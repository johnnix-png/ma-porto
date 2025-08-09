import React from 'react';
import { SOCIAL_LINKS } from '@/content/portfolioData';
import { Instagram, Send, Mail, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} — Your Name</p>
        <nav className="flex items-center gap-4">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover-scale text-foreground/80 hover:text-foreground">
            <Instagram className="h-5 w-5" />
          </a>
          <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noreferrer" aria-label="Telegram" className="hover-scale text-foreground/80 hover:text-foreground">
            <Send className="h-5 w-5" />
          </a>
          <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="hover-scale text-foreground/80 hover:text-foreground">
            <Music2 className="h-5 w-5" />
          </a>
          <a href={SOCIAL_LINKS.email} aria-label="Email" className="hover-scale text-foreground/80 hover:text-foreground">
            <Mail className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
