import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { LocationPlantingStats, TreatmentRow } from '../data/potatoPlantingStats';

interface PlantingStatsTableProps {
  stats: LocationPlantingStats;
}

const ROWS_COLLAPSED = 3;

const TreatmentCard = ({ row }: { row: TreatmentRow }) => (
  <div className="border-t border-gray-100 px-4 py-4 first:border-t-0">
    <p className="text-eabono-green font-bold text-base mb-2">Treatment {row.treatment}</p>
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
      <div>
        <span className="text-gray-500">Plant Ht (cm)</span>
        <p className="font-medium text-gray-800">{row.plantHeight}</p>
      </div>
      <div>
        <span className="text-gray-500">Stems</span>
        <p className="font-medium text-gray-800">{row.stems}</p>
      </div>
      <div>
        <span className="text-gray-500">Leaves</span>
        <p className="font-medium text-gray-800">{row.leaves}</p>
      </div>
      <div>
        <span className="text-gray-500">Chlorophyll</span>
        <p className="font-medium text-gray-800">{row.chlorophyll}</p>
      </div>
      <div>
        <span className="text-gray-500">NDVI</span>
        <p className="font-medium text-gray-800">{row.ndvi}</p>
      </div>
      <div>
        <span className="text-gray-500">Yield (kg/3m²)</span>
        <p className="font-medium text-gray-800">{row.yieldPerArea}</p>
      </div>
    </div>
  </div>
);

export const PlantingStatsTable = ({ stats }: PlantingStatsTableProps) => {
  const [expandedPeriods, setExpandedPeriods] = useState<Set<string>>(new Set());

  const togglePeriod = (label: string) => {
    setExpandedPeriods((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 -mt-4">
      <h4 className="text-lg font-bold text-eabono-green mb-1">
        {stats.location} Planting Performance Data
      </h4>
      <p className="text-gray-500 text-sm mb-6">
        Mean values per treatment across each planting period (values sharing a letter within a column are not significantly different, p ≤ 0.05, DMRT)
      </p>

      <div className="flex flex-col gap-8">
        {stats.periods.map((period) => {
          const isExpanded = expandedPeriods.has(period.label);
          const visibleRows = isExpanded ? period.rows : period.rows.slice(0, ROWS_COLLAPSED);
          const hasMore = period.rows.length > ROWS_COLLAPSED;

          return (
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

              {/* Desktop / tablet: normal table, no scrolling needed since it fits */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600">
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Treatment</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Plant Ht (cm)</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Stems</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Leaves</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Chlorophyll</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">NDVI</th>
                      <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Yield (kg/3m²)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleRows.map((row) => (
                      <tr key={row.treatment} className="border-t border-gray-100">
                        <td className="px-4 py-3 font-semibold text-eabono-green">{row.treatment}</td>
                        <td className="px-4 py-3">{row.plantHeight}</td>
                        <td className="px-4 py-3">{row.stems}</td>
                        <td className="px-4 py-3">{row.leaves}</td>
                        <td className="px-4 py-3">{row.chlorophyll}</td>
                        <td className="px-4 py-3">{row.ndvi}</td>
                        <td className="px-4 py-3">{row.yieldPerArea}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile: stacked cards, no horizontal scrolling at all */}
              <div className="md:hidden">
                {visibleRows.map((row) => (
                  <TreatmentCard key={row.treatment} row={row} />
                ))}
              </div>

              {hasMore && (
                <div className="bg-gray-50 border-t border-gray-200 px-4 py-3 flex justify-center">
                  <button
                    onClick={() => togglePeriod(period.label)}
                    className="flex items-center gap-2 bg-eabono-green text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-eabono-green/90 transition-all duration-200"
                  >
                    {isExpanded ? (
                      <>
                        Show Less
                        <ChevronUp size={18} />
                      </>
                    ) : (
                      <>
                        Show All Treatments ({period.rows.length})
                        <ChevronDown size={18} />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};