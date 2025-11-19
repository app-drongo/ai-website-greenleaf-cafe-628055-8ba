'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Leaf } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

interface NavigationItem {
  label: string;
  href: string;
  section: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/', section: 'hero' },
  { label: 'About', href: '/', section: 'about' },
  { label: 'Services', href: '/', section: 'services' },
  { label: 'Gallery', href: '/', section: 'gallery' },
  { label: 'Map', href: '/', section: 'map' },
  { label: 'Contact', href: '/', section: 'contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useSmartNavigation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.section);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: NavigationItem) => {
    if (item.section === 'hero') {
      navigate('/');
    } else {
      navigate(`/#${item.section}`);
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground" data-editable="brandName">
              GreenLeaf Cafe
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map(item => (
              <Button
                key={item.section}
                variant="ghost"
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.section
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-accent/50 hover:text-accent-foreground'
                }`}
                onClick={() => handleNavClick(item)}
              >
                <span data-editable={`nav${item.section}Label`}>{item.label}</span>
              </Button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              onClick={() => navigate('/#contact')}
            >
              <span data-editable="navCtaText">Reserve Table</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground hover:bg-accent hover:text-accent-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="py-4 space-y-2 bg-background/95 backdrop-blur-md border-t border-border">
            {navigationItems.map(item => (
              <Button
                key={item.section}
                variant="ghost"
                className={`w-full justify-start px-4 py-3 text-base font-medium transition-colors duration-200 ${
                  activeSection === item.section
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-accent/50 hover:text-accent-foreground'
                }`}
                onClick={() => handleNavClick(item)}
              >
                <span data-editable={`navMobile${item.section}Label`}>{item.label}</span>
              </Button>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-4 px-4">
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                onClick={() => {
                  navigate('/#contact');
                  setIsOpen(false);
                }}
              >
                <span data-editable="navMobileCtaText">Reserve Table</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
