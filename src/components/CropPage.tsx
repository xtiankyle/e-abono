import React from 'react';
import { Header } from './Header';
import { AppDownload } from './AppDownload';
import { Footer } from './Footer';
import { CropResourceCard } from './CropResourceCard';
import { SimplifiedResourceCard } from './SimplifiedResourceCard';

interface LocationResource {
  location: string;
  terrain: string;
  description: string;
  timeDate: string;
  growthStage: string;
  fertilization: string;
  expectedYield: string;
  imageUrl: string;
  statsTable?: React.ReactNode; // renders below the card — Potato or Cabbage table, etc.
}

interface SimplifiedResource {
  title: string;
  description: string;
}

interface CropPageProps {
  cropName: string;
  locationResources: LocationResource[];
  fertilizationResources?: SimplifiedResource[];
}

export const CropPage = ({
  cropName,
  locationResources,
  fertilizationResources,
}: CropPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="pt-20">
        <section
          className="relative py-32 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${locationResources[0]?.imageUrl}')`,
          }}
        >
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {cropName} Resources
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive farming guides and project data across Benguet's diverse landscapes
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-eabono-green mb-4">
                Project Sites
              </h2>
              <p className="text-gray-600 text-lg">
                Explore our {cropName.toLowerCase()} cultivation projects across different terrains and climates
              </p>
            </div>

            <div className="space-y-12">
              {locationResources.map((resource, index) => (
                <div key={index} className="space-y-6">
                  <CropResourceCard {...resource} />
                  {resource.statsTable}
                </div>
              ))}
            </div>

            {fertilizationResources && fertilizationResources.length > 0 && (
              <div className="mt-20">
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-eabono-green mb-4">
                    Fertilization Guides
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Expert recommendations for optimal nutrient management
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {fertilizationResources.map((resource, index) => (
                    <SimplifiedResourceCard key={index} {...resource} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};