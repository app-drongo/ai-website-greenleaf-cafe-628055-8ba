'use client';

import React from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { Leaf, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const navigate = useSmartNavigation();

  const footerConfig = {
    brandName: 'GreenLeaf Cafe',
    tagline: 'Farm to Table Freshness',
    description:
      'Serving organic, locally-sourced meals with love and care for our community and environment.',

    // Contact Information
    address: '123 Organic Street, Green Valley, CA 90210',
    phone: '(555) 123-4567',
    email: 'hello@greenleafcafe.com',

    // Hours
    hours: {
      weekdays: 'Monday - Friday: 7:00 AM - 8:00 PM',
      weekends: 'Saturday - Sunday: 8:00 AM - 9:00 PM',
    },

    // Navigation Links
    quickLinks: [
      { label: 'Home', href: '#hero' },
      { label: 'About Us', href: '#about' },
      { label: 'Our Story', href: '#about' },
      { label: 'Menu', href: '#menu' },
    ],

    // Legal Links
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],

    // Social Media
    socialLinks: [
      { icon: Facebook, href: 'https://facebook.com/greenleafcafe', label: 'Facebook' },
      { icon: Instagram, href: 'https://instagram.com/greenleafcafe', label: 'Instagram' },
      { icon: Twitter, href: 'https://twitter.com/greenleafcafe', label: 'Twitter' },
    ],

    copyright: '© 2024 GreenLeaf Cafe. All rights reserved.',
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  <span data-editable="brandName">{footerConfig.brandName}</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <span data-editable="tagline">{footerConfig.tagline}</span>
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 max-w-md">
              <span data-editable="description">{footerConfig.description}</span>
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {footerConfig.socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={index}
                    onClick={() => navigate(social.href)}
                    className="w-10 h-10 bg-muted hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              <span data-editable="quickLinksTitle">Company</span>
            </h4>
            <nav className="space-y-3">
              {footerConfig.quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => navigate(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  data-editable-href={`quickLink${index}Href`}
                  data-href={link.href}
                >
                  <span data-editable={`quickLink${index}Label`}>{link.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              <span data-editable="contactTitle">Contact Info</span>
            </h4>
            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  <span data-editable="address">{footerConfig.address}</span>
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${footerConfig.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-editable="phone"
                >
                  {footerConfig.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${footerConfig.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-editable="email"
                >
                  {footerConfig.email}
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p data-editable="weekdayHours">{footerConfig.hours.weekdays}</p>
                  <p data-editable="weekendHours">{footerConfig.hours.weekends}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyright">{footerConfig.copyright}</span>
          </p>

          {/* Legal Links */}
          <div className="flex gap-6">
            {footerConfig.legalLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => navigate(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                data-editable-href={`legalLink${index}Href`}
                data-href={link.href}
              >
                <span data-editable={`legalLink${index}Label`}>{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => navigate('#hero')}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50"
        aria-label="Back to top"
      >
        <div className="w-6 h-6 border-t-2 border-r-2 border-primary-foreground transform rotate-[-45deg] group-hover:translate-y-[-2px] transition-transform" />
      </button>
    </footer>
  );
}
