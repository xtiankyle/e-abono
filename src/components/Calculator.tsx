import React, { useState } from 'react';
import { Header } from './Header';
import { AppDownload } from './AppDownload';
import { Footer } from './Footer';

interface FormData {
  cropType: string;
  targetYield: string;
  landArea: string; // entered in square meters
}

interface ResultData {
  nitrogenNeededKg: number;
  ratePerHectareKg: number;
  landAreaNum: number;
  cropLabel: string;
  targetLabel: string;
}

//  Source rates: Cabbage High = 250 ton/ha, Normal = 140 ton/ha;
//                Potato High = 210 ton/ha, Normal = 140 ton/ha
//  Stored directly in kg/ha (ton/ha x 1000) so no conversion is needed later.
const RATE_TABLE: Record<string, Record<string, number>> = {
  cabbage: {
    high: 250000,
    normal: 140000,
  },
  potato: {
    high: 210000,
    normal: 140000,
  },
};

const HECTARE_IN_SQM = 10000;

export const Calculator = () => {
  const [formData, setFormData] = useState<FormData>({
    cropType: '',
    targetYield: '',
    landArea: '',
  });

  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<ResultData | null>(null);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCalculate = () => {
    if (!formData.cropType || !formData.targetYield || !formData.landArea) {
      setError('Please fill in all fields before calculating.');
      setShowResults(false);
      return;
    }

    const landAreaNum = parseFloat(formData.landArea);
    if (isNaN(landAreaNum) || landAreaNum <= 0) {
      setError('Please enter a valid land area greater than 0.');
      setShowResults(false);
      return;
    }

    //  rate is stored in kg/ha
    const ratePerHectareKg = RATE_TABLE[formData.cropType]?.[formData.targetYield] ?? 0;

    //  scale to the user's land area (land area in m2 / 10,000 m2 per hectare)
    const hectareFraction = landAreaNum / HECTARE_IN_SQM;
    const nitrogenNeededKg = ratePerHectareKg * hectareFraction;

    const cropLabel = formData.cropType === 'cabbage' ? 'Cabbage' : formData.cropType === 'potato' ? 'Potato' : '';
    const targetLabel = formData.targetYield === 'high' ? 'High' : formData.targetYield === 'normal' ? 'Normal' : '';

    setResults({ nitrogenNeededKg, ratePerHectareKg, landAreaNum, cropLabel, targetLabel });
    setError('');
    setShowResults(true);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-eabono-green mb-4">
                Nitrogen Rate Calculator
              </h1>
              <div className="w-24 h-1 bg-eabono-gold mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Calculate optimal nitrogen rates for your crops
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-eabono-green to-eabono-green-light p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-white text-2xl font-bold">
                    Crop Information
                  </h2>
                </div>
                <p className="text-white/80 text-sm">Provide details about your crop and targets</p>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm">
                      Crop Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="cropType"
                        value={formData.cropType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-eabono-green focus:bg-white focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">Select crop type</option>
                        <option value="potato">Potato</option>
                        <option value="cabbage">Cabbage</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm">
                      Target Yield <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="targetYield"
                        value={formData.targetYield}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-eabono-green focus:bg-white focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="">Select target yield</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm">
                      Land Area (m²) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="landArea"
                      value={formData.landArea}
                      onChange={handleInputChange}
                      placeholder="Enter land area in square meters"
                      min="0"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-eabono-green focus:bg-white focus:outline-none transition-all duration-200"
                    />
                    <p className="text-xs text-gray-400">1 hectare = 10,000 m²</p>
                  </div>
                </div>

                <button
                  onClick={handleCalculate}
                  className="w-full bg-eabono-gold text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-eabono-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  Calculate
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </button>

                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  <span className="text-red-500">*</span> All fields are required
                </p>

                {error && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-600 rounded-xl p-4 text-center font-medium">
                    {error}
                  </div>
                )}

                {showResults && results && (
                  <div className="pt-4 border-t-2 border-gray-100 space-y-6">
                    <div className="text-center">
                      <p className="text-gray-500 text-sm font-medium mb-2">Total Nitrogen Needed</p>
                      <p className="text-5xl md:text-6xl font-bold text-eabono-green">
                        {results.nitrogenNeededKg.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        <span className="text-2xl md:text-3xl text-gray-400 ml-2">kg</span>
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-xs text-gray-400 font-medium mb-1">Crop</p>
                        <p className="text-gray-800 font-bold">{results.cropLabel}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-xs text-gray-400 font-medium mb-1">Target</p>
                        <p className="text-gray-800 font-bold">{results.targetLabel}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-xs text-gray-400 font-medium mb-1">Land Area</p>
                        <p className="text-gray-800 font-bold">{results.landAreaNum.toLocaleString()} m²</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <p className="text-xs text-gray-400 font-medium mb-1">Rate Used</p>
                        <p className="text-gray-800 font-bold">{results.ratePerHectareKg.toLocaleString()} kg/ha</p>
                      </div>
                    </div>
                  </div>
                )}
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
