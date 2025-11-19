'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { Leaf, ArrowDown } from 'lucide-react';

interface HeroConfig {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  backgroundImage: string;
  scrollToSection: string;
}

const defaultConfig: HeroConfig = {
  title: 'Farm to Table Freshness',
  subtitle: 'Welcome to GreenLeaf Cafe',
  description:
    'Experience the pure taste of organic ingredients sourced directly from local farms. Every dish tells a story of sustainability, health, and community.',
  ctaText: 'Reserve Your Table',
  ctaHref: '#contact',
  secondaryCtaText: 'View Our Menu',
  secondaryCtaHref: '/menu',
  backgroundImage: '/api/placeholder/1920/1080',
  scrollToSection: '#about',
};

export default function Hero({ config = defaultConfig }: { config?: Partial<HeroConfig> }) {
  const navigate = useSmartNavigation();
  const finalConfig = { ...defaultConfig, ...config };

  const scrollToNext = () => {
    const element = document.querySelector(finalConfig.scrollToSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${finalConfig.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-background/40 dark:bg-background/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Leaf className="w-16 h-16 text-primary rotate-12" />
      </div>
      <div
        className="absolute bottom-32 right-16 opacity-20 animate-float"
        style={{ animationDelay: '1s' }}
      >
        <Leaf className="w-12 h-12 text-primary -rotate-45" />
      </div>
      <div
        className="absolute top-1/3 right-20 opacity-10 animate-float"
        style={{ animationDelay: '2s' }}
      >
        <Leaf className="w-20 h-20 text-primary rotate-90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              <Leaf className="w-4 h-4" />
              <span data-editable="subtitle">{finalConfig.subtitle}</span>
            </span>
          </div>

          {/* Main Title */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span data-editable="title">{finalConfig.title}</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span data-editable="description">{finalConfig.description}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ animationDelay: '0.8s' }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate(finalConfig.ctaHref)}
              data-editable-href="ctaHref"
              data-href={finalConfig.ctaHref}
            >
              <span data-editable="ctaText">{finalConfig.ctaText}</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-foreground/20 text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate(finalConfig.secondaryCtaHref)}
              data-editable-href="secondaryCtaHref"
              data-href={finalConfig.secondaryCtaHref}
            >
              <span data-editable="secondaryCtaText">{finalConfig.secondaryCtaText}</span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="animate-fade-in-up flex flex-wrap justify-center items-center gap-8 pt-8"
            style={{ animationDelay: '1s' }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">100% Organic</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">Locally Sourced</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">Farm Fresh Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 animate-bounce"
          aria-label="Scroll to next section"
        >
          <span className="text-sm font-medium">Discover More</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-20px) rotate(var(--rotation, 0deg));
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
