'use client';

import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  backgroundImage?: string;
  showBreadcrumbs?: boolean;
}

export default function Pageheader({
  title = 'Our Menu',
  subtitle = 'Farm-fresh ingredients crafted into delicious, organic meals',
  breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Menu' }],
  backgroundImage = '/images/menu-header-bg.jpg',
  showBreadcrumbs = true,
}: PageHeaderProps) {
  const navigate = useSmartNavigation();

  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        {/* Breadcrumbs */}
        {showBreadcrumbs && breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index === 0 && <Home className="w-4 h-4 mr-2 text-muted-foreground" />}
                  {crumb.href ? (
                    <button
                      onClick={() => navigate(crumb.href!)}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
                      data-editable-href={`breadcrumb-${index}-href`}
                      data-href={crumb.href}
                    >
                      <span data-editable={`breadcrumb-${index}-label`}>{crumb.label}</span>
                    </button>
                  ) : (
                    <span
                      className="text-foreground font-medium"
                      data-editable={`breadcrumb-${index}-label`}
                    >
                      {crumb.label}
                    </span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-4 h-4 ml-2 text-muted-foreground" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Page Title */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            <span data-editable="title">{title}</span>
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span data-editable="subtitle">{subtitle}</span>
            </p>
          )}
        </div>

        {/* Decorative Element */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-primary rounded-full" />
        </div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-5 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-16 h-16 border border-primary/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-primary/20 rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-32 right-1/3 w-14 h-14 border border-primary/20 rounded-full animate-pulse delay-500" />
      </div>
    </section>
  );
}
