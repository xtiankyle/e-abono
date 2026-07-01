import React from 'react';
import { CropPage } from './CropPage';
import { PlantingStatsTable } from './PlantingStatsTable';
import {
  atokPlantingStats,
  laTrinidadPlantingStats,
  mankayanPlantingStats,
} from '../data/potatoPlantingStats';

export const PotatoPage = () => {
  const locationResources = [
    {
      location: 'La Trinidad',
      terrain: 'Flat Terrain',
      description:
        'The La Trinidad potato cultivation project focuses on optimizing yield through precision agriculture techniques. This site demonstrates advanced nitrogen management practices and sustainable farming methods tailored for flat terrain conditions.',
      timeDate: 'March 2024 - June 2024',
      growthStage: 'Vegetative Stage',
      fertilization: '120 kg N/ha, 60 kg P/ha, 100 kg K/ha',
      expectedYield: '25-30 tons/hectare',
      imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80',
      statsTable: <PlantingStatsTable stats={laTrinidadPlantingStats} />,
    },
    {
      location: 'Atok',
      terrain: 'Mountainous Terrain',
      description:
        'The Atok site showcases high-altitude potato farming with specialized techniques for mountainous regions. This project emphasizes soil conservation and optimal fertilizer application in challenging terrain conditions.',
      timeDate: 'February 2024 - May 2024',
      growthStage: 'Tuber Formation Stage',
      fertilization: '100 kg N/ha, 50 kg P/ha, 80 kg K/ha',
      expectedYield: '20-25 tons/hectare',
      imageUrl: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=800&q=80',
      statsTable: <PlantingStatsTable stats={atokPlantingStats} />,
    },
    {
      location: 'Mankayan',
      terrain: 'Terrace Terrain',
      description:
        'The Mankayan terrace farming project demonstrates innovative irrigation and fertilization strategies for potato cultivation. This site serves as a model for sustainable agriculture practices in terraced landscapes.',
      timeDate: 'April 2024 - July 2024',
      growthStage: 'Early Development Stage',
      fertilization: '110 kg N/ha, 55 kg P/ha, 90 kg K/ha',
      expectedYield: '22-28 tons/hectare',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      statsTable: <PlantingStatsTable stats={mankayanPlantingStats} />,
    },
  ];

  const fertilizationResources = [
    {
      title: 'Potato La Trinidad Fertilization Guide',
      description:
        'Comprehensive guide covering optimal fertilization schedules, nitrogen application rates, and soil management techniques specifically designed for potato cultivation in La Trinidad. Includes seasonal recommendations and weather-based adjustments.',
    },
    {
      title: 'Potato Atok High-Altitude Farming Manual',
      description:
        'Specialized resource for high-altitude potato farming covering cold-climate adaptations, frost protection strategies, and fertilizer management for mountainous conditions. Includes case studies from successful Atok farmers.',
    },
  ];

  return (
    <CropPage
      cropName="Potato"
      locationResources={locationResources}
      fertilizationResources={fertilizationResources}
    />
  );
};