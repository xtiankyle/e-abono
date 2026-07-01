import React from 'react';
import { CabbageLocationStats } from '../data/cabbagePlantingStats';

interface CabbagePlantingStatsTableProps {
  stats: CabbageLocationStats;
}

export const CabbagePlantingStatsTable = ({ stats }: CabbagePlantingStatsTableProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 -mt-4">
      <h4 className="text-lg font-bold text-eabono-green mb-1">
        {stats.location} Planting Performance Data
      </h4>
      <p className="text-gray-500 text-sm mb-6">
        Mean values per treatment across each planting period (values sharing a letter within a column are not significantly different, p ≤ 0.05, DMRT)
      </p>

      <div className="flex flex-col gap-8">
        {stats.periods.map((period) => (
          <div
            key={period.label}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <div className="bg-eabono-green text-white px-5 py-4">
              <p className="font-bold text-base">{period.label}</p>
              <p className="text-sm text-gray-200">
                {period.window} ({period.years})
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-600">
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Treatment</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Plant Ht (cm)</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Leaves</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Chlorophyll</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">NDVI</th>
                    <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Yield ({period.yieldUnit})</th>
                  </tr>
                </thead>
                <tbody>
                  {period.rows.map((row) => (
                    <tr key={row.treatment} className="border-t border-gray-100">
                      <td className="px-4 py-3 font-semibold text-eabono-green">{row.treatment}</td>
                      <td className="px-4 py-3">{row.plantHeight}</td>
                      <td className="px-4 py-3">{row.leaves}</td>
                      <td className="px-4 py-3">{row.chlorophyll}</td>
                      <td className="px-4 py-3">{row.ndvi}</td>
                      <td className="px-4 py-3">{row.yieldValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};