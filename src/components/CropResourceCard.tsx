import React from 'react';
import { Download, MapPin, Calendar, TrendingUp, Leaf, BarChart3 } from 'lucide-react';

interface CropResourceCardProps {
  location: string;
  terrain: string;
  description: string;
  timeDate: string;
  growthStage: string;
  fertilization: string;
  expectedYield: string;
  imageUrl: string;
}

export const CropResourceCard = ({
  location,
  terrain,
  description,
  timeDate,
  growthStage,
  fertilization,
  expectedYield,
  imageUrl,
}: CropResourceCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
      <div className="grid md:grid-cols-5 gap-0 md:h-[420px]">
        <div className="md:col-span-2 relative overflow-hidden h-[280px] md:h-full">
          <img
            src={imageUrl}
            alt={`${location} crop field`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-eabono-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
              <MapPin size={16} />
              {terrain}
            </span>
          </div>
        </div>

        <div className="md:col-span-3 p-8 lg:p-10 flex flex-col overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-eabono-green mb-2">{location}</h3>
            <div className="w-20 h-1 bg-eabono-gold rounded-full"></div>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 flex-grow">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 text-eabono-green mb-2">
                <Calendar size={20} />
                <span className="font-bold text-sm">Timeline</span>
              </div>
              <p className="text-gray-700 text-sm">{timeDate}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 text-eabono-green mb-2">
                <TrendingUp size={20} />
                <span className="font-bold text-sm">Growth Stage</span>
              </div>
              <p className="text-gray-700 text-sm">{growthStage}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 text-eabono-green mb-2">
                <Leaf size={20} />
                <span className="font-bold text-sm">Fertilization</span>
              </div>
              <p className="text-gray-700 text-sm">{fertilization}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 text-eabono-green mb-2">
                <BarChart3 size={20} />
                <span className="font-bold text-sm">Expected Yield</span>
              </div>
              <p className="text-gray-700 text-sm">{expectedYield}</p>
            </div>
          </div>

          <div className="flex justify-end mt-auto">
            <button className="bg-eabono-gold text-white px-8 py-3.5 rounded-xl font-bold hover:bg-eabono-gold/90 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105">
              <Download size={20} />
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};