'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

interface ContactConfig {
  title: string;
  subtitle: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  formTitle: string;
  submitText: string;
  successMessage: string;
}

const defaultConfig: ContactConfig = {
  title: 'Visit GreenLeaf Cafe',
  subtitle: 'Reserve your table or get in touch with us',
  address: '123 Organic Street, Farm District, Green Valley, CA 90210',
  phone: '(555) 123-LEAF',
  email: 'hello@greenleafcafe.com',
  hours: {
    weekdays: 'Monday - Friday: 7:00 AM - 9:00 PM',
    weekends: 'Saturday - Sunday: 8:00 AM - 10:00 PM',
  },
  formTitle: 'Make a Reservation',
  submitText: 'Reserve Table',
  successMessage:
    "Thank you! Your reservation request has been received. We'll confirm within 24 hours.",
};

export default function Contact({ config = defaultConfig }: { config?: ContactConfig }) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: '',
      });
    }, 3000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Location
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable="address">{config.address}</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  Phone
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <span data-editable="phone">{config.phone}</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  Email
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <span data-editable="email">{config.email}</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Hours
                </h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  <span data-editable="weekdays">{config.hours.weekdays}</span>
                </p>
                <p className="text-muted-foreground">
                  <span data-editable="weekends">{config.hours.weekends}</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Reservation Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-foreground">
                <span data-editable="formTitle">{config.formTitle}</span>
              </h3>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-foreground text-lg">
                    <span data-editable="successMessage">{config.successMessage}</span>
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-form-id="691d21978d16b17836f3bbc9"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={e => handleInputChange('name', e.target.value)}
                        className={`bg-background border-input ${errors.name ? 'border-destructive' : ''}`}
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                      {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={e => handleInputChange('email', e.target.value)}
                        className={`bg-background border-input ${errors.email ? 'border-destructive' : ''}`}
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                      {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={e => handleInputChange('phone', e.target.value)}
                      className={`bg-background border-input ${errors.phone ? 'border-destructive' : ''}`}
                      placeholder="(555) 123-4567"
                      disabled={isSubmitting}
                    />
                    {errors.phone && <p className="text-destructive text-sm">{errors.phone}</p>}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-foreground">
                        Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={e => handleInputChange('date', e.target.value)}
                        className={`bg-background border-input ${errors.date ? 'border-destructive' : ''}`}
                        min={today}
                        disabled={isSubmitting}
                      />
                      {errors.date && <p className="text-destructive text-sm">{errors.date}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-foreground">
                        Time *
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={e => handleInputChange('time', e.target.value)}
                        className={`bg-background border-input ${errors.time ? 'border-destructive' : ''}`}
                        disabled={isSubmitting}
                      />
                      {errors.time && <p className="text-destructive text-sm">{errors.time}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-foreground">
                        Guests
                      </Label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={e => handleInputChange('guests', e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                        disabled={isSubmitting}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Special Requests
                    </Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={e => handleInputChange('message', e.target.value)}
                      className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 min-h-[100px] resize-y"
                      placeholder="Any dietary restrictions, special occasions, or seating preferences..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span data-editable="submitText">{config.submitText}</span>
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
