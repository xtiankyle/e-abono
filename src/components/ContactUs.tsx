import React, { useState, useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Header } from './Header';
import { Footer } from './Footer';

// While developing locally, this points at your local backend.
// Once you deploy the backend (see contact-backend/README.md), change this
// to your live backend URL, e.g. 'https://your-app.onrender.com/api/contact'.
const CONTACT_API_URL = 'https://e-abono.vercel.app/api/contact';

export const ContactUs = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'osm': {
            type: 'raster',
            tiles: [
              'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            ],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors',
            maxzoom: 19
          }
        },
        layers: [
          {
            id: 'osm-layer',
            type: 'raster',
            source: 'osm',
            minzoom: 0,
            maxzoom: 19
          }
        ]
      },
      center: [120.5902746, 16.4543609],
      zoom: 17,
      minZoom: 14,
      maxZoom: 19,
      maxBounds: [
        [120.5500, 16.4200],
        [120.6400, 16.5200]
      ]
    });

    map.current.on('load', () => {
      new maplibregl.Marker({ color: '#7c9a3d' })
        .setLngLat([120.5902746, 16.4543609])
        .addTo(map.current!);
    });

    map.current.on('error', (e) => {
      console.error('Map error:', e);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError(false);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.');
        setSubmitError(false);
        setFormData({ name: '', email: '', comment: '' });
      } else {
        setSubmitMessage(data.error || 'Something went wrong. Please try again.');
        setSubmitError(true);
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitMessage('Unable to send your message right now. Please check your connection and try again.');
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main>
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80')`,
          }}
        >
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Get in touch with our team for any inquiries about E-Abono.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-eabono-green to-eabono-green-light p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h2 className="text-white text-2xl font-bold">Our Location</h2>
                  </div>
                  <p className="text-white/80 text-sm">Find us at Benguet State University</p>
                </div>
                <div ref={mapContainer} className="flex-1 min-h-[500px] w-full" />
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-eabono-green to-eabono-green-light p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-white text-2xl font-bold">Get in Touch</h2>
                  </div>
                  <p className="text-white/80 text-sm">Send us a message and we'll respond as soon as possible</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-gray-700 font-semibold text-sm">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-eabono-green focus:bg-white focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-gray-700 font-semibold text-sm">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-eabono-green focus:bg-white focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="comment" className="block text-gray-700 font-semibold text-sm">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-eabono-green focus:bg-white focus:outline-none transition-all duration-200 resize-none"
                    ></textarea>
                  </div>

                  {submitMessage && (
                    <div
                      className={`border-2 px-4 py-3 rounded-xl font-semibold flex items-center gap-3 ${
                        submitError
                          ? 'bg-red-50 border-red-200 text-red-600'
                          : 'bg-green-50 border-green-200 text-eabono-green'
                      }`}
                    >
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {submitError ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                      </svg>
                      <span>{submitMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-eabono-gold text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-eabono-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-2xl shadow-lg">
                <svg className="w-6 h-6 text-eabono-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-gray-700 font-semibold">
                  Visit us at <span className="text-eabono-green">Benguet State University</span>, La Trinidad, Benguet
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
