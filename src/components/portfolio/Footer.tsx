import React from 'react';
import { SOCIAL_LINKS } from '@/content/portfolioData';
import { Instagram, Send, Mail, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-border py-8" style={{ backgroundColor: "#DDDAD0" }}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} — JOHNNIX</p>
        <nav className="flex items-center gap-4">
          <a href="https://instagram.com/j0hn_r1ch" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover-scale text-foreground/80 hover:text-foreground">
            <Instagram className="h-5 w-5" />
          </a>
          <a href='https://t.me/J_O_H_N_R_I_C_H' target="_blank" rel="noreferrer" aria-label="Telegram" className="hover-scale text-foreground/80 hover:text-foreground">
            <Send className="h-5 w-5" />
          </a>
          <a href='https://www.tiktok.com/@johnnix_1' target="_blank" rel="noreferrer" aria-label="TikTok" className="hover-scale text-foreground/80 hover:text-foreground">
            <Music2 className="h-5 w-5" />
          </a>
          <a href='mailto:yohanneshabtamu524@example.com' aria-label="Email" className="hover-scale text-foreground/80 hover:text-foreground">
            <Mail className="h-5 w-5" /> 
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
