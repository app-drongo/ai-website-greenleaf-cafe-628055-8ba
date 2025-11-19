'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, Star, Users, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

interface LocationConfig {
  title: string;
  subtitle: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  mapUrl: string;
  directionsUrl: string;
  stats: {
    rating: string;
    reviews: string;
    capacity: string;
  };
  features: string[];
  ctaText: string;
  ctaHref: string;
}

const defaultConfig: LocationConfig = {
  title: 'Visit GreenLeaf Cafe',
  subtitle: 'Located in the heart of downtown, surrounded by local farmers and artisan shops',
  address: '123 Organic Street, Green Valley, CA 94102',
  phone: '(555) 123-4567',
  email: 'hello@greenleafcafe.com',
  hours: {
    weekdays: 'Monday - Friday: 7:00 AM - 8:00 PM',
    weekends: 'Saturday - Sunday: 8:00 AM - 9:00 PM',
  },
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.42107968468141!3d37.77492927975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sUnion%20Square%2C%20San%20Francisco%2C%20CA%2094108!5e0!3m2!1sen!2sus!4v1635959542742!5m2!1sen!2sus',
  directionsUrl: 'https://maps.google.com/?q=123+Organic+Street,+Green+Valley,+CA+94102',
  stats: {
    rating: '4.9',
    reviews: '500+',
    capacity: '80',
  },
  features: ['Free WiFi', 'Outdoor Seating', 'Pet Friendly', 'Parking Available'],
  ctaText: 'Make a Reservation',
  ctaHref: '#contact',
};

export default function Map({ config = defaultConfig }: { config?: LocationConfig }) {
  const navigate = useSmartNavigation();
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="location" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span data-editable="locationBadge">Find Us</span>
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-primary fill-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                <span data-editable="rating">{config.stats.rating}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                <span data-editable="reviews">{config.stats.reviews}</span> Reviews
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                <span data-editable="capacity">{config.stats.capacity}</span>
              </div>
              <p className="text-sm text-muted-foreground">Seat Capacity</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                <span data-editable="dailySpecials">5+</span>
              </div>
              <p className="text-sm text-muted-foreground">Daily Specials</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative">
            <Card className="overflow-hidden">
              <div className="relative h-96 bg-muted">
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Loading map...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src={config.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  onLoad={() => setMapLoaded(true)}
                  title="GreenLeaf Cafe Location"
                />
              </div>
            </Card>

            {/* Directions Button */}
            <div className="mt-4">
              <Button
                onClick={() => navigate(config.directionsUrl)}
                className="w-full"
                variant="outline"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            {/* Address & Contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  <span data-editable="contactTitle">Contact Information</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        <span data-editable="address">{config.address}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href={`tel:${config.phone}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-editable="phone"
                      >
                        {config.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href={`mailto:${config.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-editable="email"
                      >
                        {config.email}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  <Clock className="w-5 h-5 inline mr-2" />
                  <span data-editable="hoursTitle">Opening Hours</span>
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekdays</span>
                    <span className="font-medium text-foreground">
                      <span data-editable="weekdayHours">{config.hours.weekdays}</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekends</span>
                    <span className="font-medium text-foreground">
                      <span data-editable="weekendHours">{config.hours.weekends}</span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  <span data-editable="featuresTitle">Amenities</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {config.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        <span data-editable={`feature${index + 1}`}>{feature}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Button
              onClick={() => navigate(config.ctaHref)}
              className="w-full"
              size="lg"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
