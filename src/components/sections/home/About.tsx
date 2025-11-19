'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Heart, Users, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: '100% Organic',
      description: 'All our ingredients are certified organic, sourced directly from local farms',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish is crafted with passion and care by our experienced chefs',
    },
    {
      icon: Users,
      title: 'Community First',
      description: "We're more than a cafe - we're a gathering place for our neighborhood",
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in sustainable dining and organic cuisine',
    },
  ];

  const stats = [
    { number: '5+', label: 'Years Serving' },
    { number: '50+', label: 'Local Farms' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '100%', label: 'Organic Ingredients' },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <span data-editable="sectionBadge">Our Story</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span data-editable="title">Farm to Table Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span data-editable="subtitle">
              Since 2019, GreenLeaf Cafe has been committed to serving the freshest organic meals
              while supporting local farmers and building a sustainable community.
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                <span data-editable="storyTitle">Our Journey Began</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <span data-editable="storyParagraph1">
                  What started as a dream to create a space where healthy eating meets exceptional
                  taste has grown into a beloved community hub. Our founders, Sarah and Michael,
                  were inspired by their travels through organic farms across the country.
                </span>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <span data-editable="storyParagraph2">
                  Today, we work directly with over 50 local farms to bring you the freshest
                  seasonal ingredients. Every dish tells a story of sustainability, community, and
                  the pure joy of eating well.
                </span>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                    <span data-editable={`stat${index + 1}Number`}>{stat.number}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stat${index + 1}Label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Leaf className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">
                    <span data-editable="imagePlaceholder">About Us Image</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <span data-editable="certificationYear">2019</span>
                </div>
                <div className="text-sm opacity-90">
                  <span data-editable="certificationText">Certified Organic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    <span data-editable={`value${index + 1}Title`}>{value.title}</span>
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <span data-editable={`value${index + 1}Description`}>{value.description}</span>
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20 p-8 lg:p-12 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-6" />
              <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed mb-6">
                <span data-editable="missionQuote">
                  "Our mission is simple: to nourish our community with the purest ingredients
                  nature has to offer, while supporting the farmers who make it all possible."
                </span>
              </blockquote>
              <div className="text-muted-foreground">
                <span data-editable="missionAuthor">— Sarah & Michael, Founders</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
