import React from 'react';
import { SOCIAL_LINKS } from '@/content/portfolioData';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="rounded-lg border border-border bg-card/80 backdrop-blur p-8 shadow">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Contact</h2>
          <p className="text-muted-foreground mb-6">Like what you see? Let's work together.</p>
          <a
            href={SOCIAL_LINKS.email}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-95 transition-opacity"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
