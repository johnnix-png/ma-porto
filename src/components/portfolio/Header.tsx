import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#work" className="story-link text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
          My Work
        </a>
      </div>
    </header>
  );
};

export default Header;
