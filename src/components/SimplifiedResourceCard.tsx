import React from 'react';
import { Download, FileText } from 'lucide-react';

interface SimplifiedResourceCardProps {
  title: string;
  description: string;
}

export const SimplifiedResourceCard = ({
  title,
  description,
}: SimplifiedResourceCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full flex flex-col">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-eabono-green/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-eabono-green/20 transition-colors duration-300">
          <FileText size={24} className="text-eabono-green" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-eabono-green mb-2">{title}</h3>
          <div className="w-16 h-1 bg-eabono-gold rounded-full"></div>
        </div>
      </div>

      <p className="text-gray-700 mb-8 leading-relaxed flex-grow">{description}</p>

      <div className="mt-auto">
        <button className="w-full bg-eabono-green-light text-white px-8 py-3 rounded-xl font-bold hover:bg-eabono-green transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg">
          <Download size={20} />
          Download Guide
        </button>
      </div>
    </div>
  );
};