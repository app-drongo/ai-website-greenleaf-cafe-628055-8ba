'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, ZoomIn, ChefHat, Coffee, Salad, Cookie } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: '/api/placeholder/400/300',
    alt: 'Fresh organic salad bowl',
    category: 'Salads',
    title: 'Garden Fresh Bowl',
  },
  {
    id: '2',
    src: '/api/placeholder/400/300',
    alt: 'Artisan coffee latte art',
    category: 'Coffee',
    title: 'Signature Latte',
  },
  {
    id: '3',
    src: '/api/placeholder/400/300',
    alt: 'Organic breakfast plate',
    category: 'Breakfast',
    title: 'Farm Breakfast',
  },
  {
    id: '4',
    src: '/api/placeholder/400/300',
    alt: 'Fresh baked pastries',
    category: 'Pastries',
    title: 'Daily Baked Goods',
  },
  {
    id: '5',
    src: '/api/placeholder/400/300',
    alt: 'Seasonal soup bowl',
    category: 'Soups',
    title: 'Harvest Soup',
  },
  {
    id: '6',
    src: '/api/placeholder/400/300',
    alt: 'Organic smoothie bowl',
    category: 'Smoothies',
    title: 'Power Bowl',
  },
  {
    id: '7',
    src: '/api/placeholder/400/300',
    alt: 'Grilled sandwich',
    category: 'Lunch',
    title: 'Artisan Sandwich',
  },
  {
    id: '8',
    src: '/api/placeholder/400/300',
    alt: 'Fresh juice selection',
    category: 'Beverages',
    title: 'Cold Pressed Juices',
  },
  {
    id: '9',
    src: '/api/placeholder/400/300',
    alt: 'Organic dessert',
    category: 'Desserts',
    title: 'Sweet Treats',
  },
];

const categories = [
  { name: 'All', icon: ChefHat },
  { name: 'Coffee', icon: Coffee },
  { name: 'Salads', icon: Salad },
  { name: 'Pastries', icon: Cookie },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <span data-editable="badge">Our Gallery</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span data-editable="title">Taste the Freshness</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="description">
              Discover our carefully crafted dishes made with the finest organic ingredients,
              sourced directly from local farms and prepared with love.
            </span>
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.name)}
                className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <IconComponent className="w-4 h-4" />
                <span data-editable={`category-${category.name.toLowerCase()}`}>
                  {category.name}
                </span>
              </Button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(item)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm"
                  >
                    <span data-editable={`item-category-${item.id}`}>{item.category}</span>
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    <span data-editable={`item-title-${item.id}`}>{item.title}</span>
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              <span data-editable="stat1-number">50+</span>
            </div>
            <p className="text-muted-foreground">
              <span data-editable="stat1-label">Menu Items</span>
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              <span data-editable="stat2-number">100%</span>
            </div>
            <p className="text-muted-foreground">
              <span data-editable="stat2-label">Organic</span>
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              <span data-editable="stat3-number">15+</span>
            </div>
            <p className="text-muted-foreground">
              <span data-editable="stat3-label">Local Farms</span>
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              <span data-editable="stat4-number">5★</span>
            </div>
            <p className="text-muted-foreground">
              <span data-editable="stat4-label">Rating</span>
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="outline"
              size="icon"
              className="absolute -top-12 right-0 bg-background/10 border-white/20 text-white hover:bg-white hover:text-foreground z-10"
              onClick={closeLightbox}
            >
              <X className="w-4 h-4" />
            </Button>
            <div className="bg-card rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
                onClick={e => e.stopPropagation()}
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {selectedImage.title}
                    </h3>
                    <Badge variant="secondary">{selectedImage.category}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
