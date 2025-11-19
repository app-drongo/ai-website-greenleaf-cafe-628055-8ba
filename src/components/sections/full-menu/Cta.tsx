'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { Leaf, Clock, MapPin, Phone } from 'lucide-react';

interface CTAConfig {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  backgroundImage?: string;
}

const defaultConfig: CTAConfig = {
  title: 'Ready to Experience Farm-Fresh Goodness?',
  subtitle: 'Join the GreenLeaf Community',
  description:
    'Book your table today and taste the difference that organic, locally-sourced ingredients make. From our farm to your table, every bite tells a story of sustainability and flavor.',
  primaryCTA: {
    text: 'Reserve Your Table',
    href: '#contact',
  },
  secondaryCTA: {
    text: 'View Full Menu',
    href: '/menu',
  },
  features: [
    {
      icon: 'leaf',
      title: '100% Organic',
      description: 'Certified organic ingredients from local farms',
    },
    {
      icon: 'clock',
      title: 'Fresh Daily',
      description: 'Made fresh every morning with seasonal produce',
    },
    {
      icon: 'map',
      title: 'Community Focused',
      description: 'Supporting local farmers and sustainable practices',
    },
    {
      icon: 'phone',
      title: 'Easy Booking',
      description: 'Quick reservations online or by phone',
    },
  ],
};

const iconMap = {
  leaf: Leaf,
  clock: Clock,
  map: MapPin,
  phone: Phone,
};

export default function Cta({ config = defaultConfig }: { config?: CTAConfig }) {
  const navigate = useSmartNavigation();

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              <span data-editable="subtitle">{config.subtitle}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span data-editable="title">{config.title}</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate(config.primaryCTA.href)}
                data-editable-href="primaryCTA.href"
                data-href={config.primaryCTA.href}
              >
                <span data-editable="primaryCTA.text">{config.primaryCTA.text}</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate(config.secondaryCTA.href)}
                data-editable-href="secondaryCTA.href"
                data-href={config.secondaryCTA.href}
              >
                <span data-editable="secondaryCTA.text">{config.secondaryCTA.text}</span>
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Leaf;

              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="font-semibold text-foreground mb-2">
                      <span data-editable={`features.${index}.title`}>{feature.title}</span>
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span data-editable={`features.${index}.description`}>
                        {feature.description}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom Accent */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-px bg-border"></div>
              <Leaf className="w-4 h-4 text-primary" />
              <div className="w-8 h-px bg-border"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-12 w-3 h-3 bg-accent/40 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-primary/50 rounded-full animate-pulse delay-500"></div>
    </section>
  );
}
