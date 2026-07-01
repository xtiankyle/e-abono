import React from 'react';
import { CropPage } from './CropPage';
import { CabbagePlantingStatsTable } from './CabbagePlantingStatsTable';
import {
  cabbageAtokStats,
  cabbageLaTrinidadStats,
  cabbageMankayanStats,
} from '../data/cabbagePlantingStats';

export const CabbagePage = () => {
  const locationResources = [
    {
      location: 'La Trinidad',
      terrain: 'Flat Terrain',
      description:
        'The La Trinidad cabbage project implements cutting-edge agricultural technology for optimal head formation and disease prevention. This site demonstrates best practices for nitrogen management in cabbage cultivation on flat terrain.',
      timeDate: 'January 2024 - April 2024',
      growthStage: 'Head Formation Stage',
      fertilization: '150 kg N/ha, 70 kg P/ha, 120 kg K/ha',
      expectedYield: '40-50 tons/hectare',
      imageUrl: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=800&q=80',
      statsTable: <CabbagePlantingStatsTable stats={cabbageLaTrinidadStats} />,
    },
    {
      location: 'Atok',
      terrain: 'Rolling Terrain',
      description:
        'The Atok cabbage cultivation site focuses on premium variety production using advanced fertilization techniques. This project showcases successful cabbage farming in rolling terrain with emphasis on soil nutrient management.',
      timeDate: 'February 2024 - May 2024',
      growthStage: 'Vegetative Growth Stage',
      fertilization: '140 kg N/ha, 65 kg P/ha, 110 kg K/ha',
      expectedYield: '35-45 tons/hectare',
      imageUrl: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=800',
      statsTable: <CabbagePlantingStatsTable stats={cabbageAtokStats} />,
    },
    {
      location: 'Mankayan',
      terrain: 'Terrace Terrain',
      description:
        'The Mankayan terrace cabbage project combines traditional farming knowledge with modern precision agriculture. This site serves as a demonstration of sustainable intensification practices for terrace-based cabbage production.',
      timeDate: 'March 2024 - June 2024',
      growthStage: 'Early Development Stage',
      fertilization: '145 kg N/ha, 68 kg P/ha, 115 kg K/ha',
      expectedYield: '38-48 tons/hectare',
      imageUrl: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=800&q=80',
      statsTable: <CabbagePlantingStatsTable stats={cabbageMankayanStats} />,
    },
  ];

  const fertilizationResources = [
    {
      title: 'Cabbage La Trinidad Nutrient Management Guide',
      description:
        'Complete nutrient management guide for cabbage production covering all growth stages. Includes detailed fertilization schedules, pest management integration, and harvest timing recommendations for optimal yield and quality.',
    },
    {
      title: 'Cabbage Mankayan Terrace Farming Handbook',
      description:
        'Specialized handbook addressing unique challenges of terrace cabbage farming. Features water management strategies, erosion control techniques, and customized fertilization approaches for terrace systems.',
    },
  ];

  return (
    <CropPage
      cropName="Cabbage"
      locationResources={locationResources}
      fertilizationResources={fertilizationResources}
    />
  );
};