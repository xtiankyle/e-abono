import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, BookOpen, Users, GraduationCap } from 'lucide-react';
import { Header } from './Header';
import { AppDownload } from './AppDownload';
import { Footer } from './Footer';

export const AboutUs = () => {
  const [staffSlide, setStaffSlide] = useState(0);

  const projectLeader = {
    name: 'Janet P. Pablo',
    role: 'Project Director',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    bio: 'Leading the E-Abono initiative with a vision to transform agricultural practices in the Cordillera region through science-driven innovation.',
  };

  const studyLeaders = [
    {
      name: 'Roscinto Ian C. Lumbres',
      role: 'Lead Agricultural Engineer',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      name: 'Gennie B. Soyon',
      role: 'Soil Scientist',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
    {
      name: 'Frevy T. Orencia',
      role: 'Field Coordinator',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    },
    {
      name: 'Cheryll C. Launio',
      role: 'Data Analyst',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
  ];

  const projectStaff = [
    {
      name: 'Jonray B. Tacudog',
      role: 'Mobile App Developer',
      imageUrl: '/jonray.jpg',
    },
    {
      name: 'Mamerto S. Liwayan',
      role: 'Community Liaison',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    },
    {
      name: 'Noreen A. Moreno',
      role: 'Research Assistant',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    },
    {
      name: 'Daniel B. Sacley',
      role: 'Farmer Training Specialist',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    },
  ];

  const interns = [
    {
      name: 'Jon Delvic Calub',
      role: 'Intern',
      imageUrl: '/Calub.jpg',
    },
    {
      name: 'Drent Dyver Deponio',
      role: 'Intern',
      imageUrl: '/Drent.webp',
    },
    {
      name: 'Christian Kyle Ramirez',
      role: 'Intern',
      imageUrl: '/Christian.jpg',
    },
  ];

  const staffPerPage = 4;
  const staffSlides = Math.ceil(projectStaff.length / staffPerPage);
  const visibleStaff = projectStaff;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80')`,
          }}
        >
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">About Us</h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Empowering farmers through innovative agricultural technology and sustainable practices for a prosperous future.
            </p>
          </div>
        </section>

        {/* About & Mission */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d6a2d] mb-8 text-center">About E-Abono</h2>
            <div className="max-w-4xl mx-auto text-center mb-14">
              <p className="text-gray-700 leading-relaxed mb-5">
                E-Abono is a groundbreaking agricultural technology initiative designed to revolutionize farming practices in the Cordillera region. Through cutting-edge AI-powered nitrogen detection and precision agriculture techniques, we provide farmers with the tools they need to optimize crop yields while maintaining environmental sustainability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our platform combines mobile technology, data analytics, and on-the-ground expertise to deliver real-time insights and actionable recommendations. By bridging the gap between traditional farming knowledge and modern agricultural science, E-Abono empowers local communities to thrive in an increasingly competitive agricultural landscape.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#2d6a2d] mb-8 text-center">Mission and Vision</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-700 leading-relaxed mb-5">
                Our mission is to transform agricultural practices in Benguet province by providing farmers with accessible, science-based tools for crop management. We strive to increase agricultural productivity, improve farmer livelihoods, and promote sustainable farming practices that protect our natural resources for future generations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We envision a future where every farmer in the Cordillera region has access to advanced agricultural technology, enabling them to make informed decisions about fertilization, crop management, and resource allocation.
              </p>
            </div>
          </div>
        </section>

        {/* ── TEAM SECTION ── */}
        <section className="py-16 md:py-20 bg-[#f5f9f5]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d6a2d]">The Team Behind E-Abono</h2>
              <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm md:text-base">
                A dedicated group of scientists, engineers, and community advocates working together for sustainable agriculture.
              </p>
            </div>

            {/* ── 1. PROJECT LEADER ── */}
            <div className="mb-16">
              {/* Section label */}
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="h-px flex-1 max-w-[80px] bg-[#2d6a2d]/30" />
                <div className="flex items-center gap-2 bg-[#2d6a2d] text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                  <Star size={14} fill="white" />
                  Project Leader
                </div>
                <div className="h-px flex-1 max-w-[80px] bg-[#2d6a2d]/30" />
              </div>

              {/* Leader card */}
              <div className="max-w-2xl mx-auto">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col sm:flex-row">
                  {/* Green accent stripe */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2d6a2d] to-[#5aaa5a]" />

                  {/* Photo */}
                  <div className="sm:w-56 md:w-64 shrink-0 relative overflow-hidden">
                    <img
                      src={projectLeader.imageUrl}
                      alt={projectLeader.name}
                      className="w-full h-56 sm:h-full object-cover object-top"
                    />
                    {/* Subtle green overlay on bottom for mobile */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#2d6a2d]/30 to-transparent sm:hidden" />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-center p-6 md:p-8">
                    <span className="text-xs font-bold tracking-widest text-[#5aaa5a] uppercase mb-2">Project Director</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{projectLeader.name}</h3>
                    <div className="w-10 h-1 bg-[#2d6a2d] rounded mb-4" />
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{projectLeader.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 2. STUDY LEADERS ── */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="h-px flex-1 max-w-[80px] bg-[#2d6a2d]/30" />
                <div className="flex items-center gap-2 bg-white border-2 border-[#2d6a2d] text-[#2d6a2d] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                  <BookOpen size={14} />
                  Study Leaders
                </div>
                <div className="h-px flex-1 max-w-[80px] bg-[#2d6a2d]/30" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                {studyLeaders.map((member, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-44 md:h-52 overflow-hidden">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Always-visible gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    {/* Text below image */}
                    <div className="p-3 md:p-4 border-t-2 border-[#2d6a2d]/20">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">{member.name}</h3>
                      <p className="text-[#2d6a2d] text-xs md:text-sm mt-1 font-medium">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 3. PROJECT STAFF ── */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="h-px flex-1 max-w-[80px] bg-[#2d6a2d]/30" />
                <div className="flex items-center gap-2 bg-[#eaf4ea] text-[#2d6a2d] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-[#2d6a2d]/20">
                  <Users size={14} />
                  Project Staff
                </div>
                <div className="h-px flex-1 max-w-[80px] bg-[#2d6a2d]/30" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                {visibleStaff.map((member, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-44 md:h-52 overflow-hidden">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-3 md:p-4 border-t-2 border-[#2d6a2d]/20">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">{member.name}</h3>
                      <p className="text-[#2d6a2d] text-xs md:text-sm mt-1 font-medium">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {staffSlides > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={() => setStaffSlide((p) => (p - 1 + staffSlides) % staffSlides)}
                    className="bg-[#2d6a2d] text-white p-2 rounded-full shadow hover:bg-[#5aaa5a] transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div className="flex gap-2">
                    {Array.from({ length: staffSlides }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setStaffSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${staffSlide === idx ? 'bg-[#2d6a2d]' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setStaffSlide((p) => (p + 1) % staffSlides)}
                    className="bg-[#2d6a2d] text-white p-2 rounded-full shadow hover:bg-[#5aaa5a] transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>

            {/* ── 4. INTERNS ── */}
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="h-px flex-1 max-w-[80px] bg-[#2d6a2d]/30" />
                <div className="flex items-center gap-2 bg-white border border-[#2d6a2d]/30 text-[#2d6a2d] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                  <GraduationCap size={14} />
                  Interns
                </div>
                <div className="h-px flex-1 max-w-[80px] bg-[#2d6a2d]/30" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
                {interns.map((member, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-44 md:h-52 overflow-hidden">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-3 md:p-4 border-t-2 border-[#2d6a2d]/20">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">{member.name}</h3>
                      <p className="text-[#2d6a2d] text-xs md:text-sm mt-1 font-medium">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};