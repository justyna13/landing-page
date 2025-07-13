import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils.ts';
import { navLinks } from '@/constants/navbar.ts';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <div className="text-xl font-bold">MojeLogo</div>

        {/* Desktop menu start */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map(({ title, link }) => (
            <a key={title} href={link} className="hover:underline">
              {title}
            </a>
          ))}
        </nav>
        {/* Desktop menu end */}

        {/* Mobile menu start */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
        {/* Mobile menu end */}
      </div>

      {/* Mobile full-width dropdown menu */}
      <div
        className={cn(
          'md:hidden absolute left-0 top-16 w-full bg-white z-40 shadow-md transition-transform duration-300 ease-in-out',
          isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-10 opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium">
          {navLinks.map(({ title, link }) => (
            <a key={title} href={link} onClick={() => setIsOpen(false)}>
              {title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
