export interface CabbageTreatmentRow {
  treatment: number;
  plantHeight: string;
  leaves: string;
  chlorophyll: string;
  ndvi: string;
  yieldValue: string;
}

export interface CabbagePlantingPeriod {
  label: string;
  window: string;
  years: string;
  yieldUnit: string;
  rows: CabbageTreatmentRow[];
}

export interface CabbageLocationStats {
  location: string;
  periods: CabbagePlantingPeriod[];
}

const atokFirst: CabbageTreatmentRow[] = [
  { treatment: 1, plantHeight: '35.17', leaves: '10', chlorophyll: '60.27', ndvi: '0.81', yieldValue: '20.67' },
  { treatment: 2, plantHeight: '37.00', leaves: '10', chlorophyll: '61.57', ndvi: '0.79', yieldValue: '19.60' },
  { treatment: 3, plantHeight: '34.87', leaves: '10', chlorophyll: '57.86', ndvi: '0.77', yieldValue: '21.73' },
  { treatment: 4, plantHeight: '38.43', leaves: '10', chlorophyll: '59.95', ndvi: '0.80', yieldValue: '21.33' },
  { treatment: 5, plantHeight: '37.17', leaves: '9', chlorophyll: '61.79', ndvi: '0.81', yieldValue: '22.93' },
];

const atokSecond: CabbageTreatmentRow[] = [
  { treatment: 1, plantHeight: '25.07', leaves: '8', chlorophyll: '52.01', ndvi: '0.62', yieldValue: '30.93' },
  { treatment: 2, plantHeight: '23.27', leaves: '8', chlorophyll: '52.02', ndvi: '0.58', yieldValue: '23.27' },
  { treatment: 3, plantHeight: '22.70', leaves: '7', chlorophyll: '48.44', ndvi: '0.42', yieldValue: '12.96' },
  { treatment: 4, plantHeight: '21.07', leaves: '8', chlorophyll: '50.68', ndvi: '0.59', yieldValue: '16.28' },
  { treatment: 5, plantHeight: '25.60', leaves: '8', chlorophyll: '50.27', ndvi: '0.61', yieldValue: '29.73' },
];

const atokThird: CabbageTreatmentRow[] = [
  { treatment: 1, plantHeight: '15.80', leaves: '7', chlorophyll: '41.63', ndvi: '0.30', yieldValue: '11.43' },
  { treatment: 2, plantHeight: '15.97', leaves: '8', chlorophyll: '39.96', ndvi: '0.35', yieldValue: '16.66' },
  { treatment: 3, plantHeight: '14.13', leaves: '8', chlorophyll: '42.84', ndvi: '0.29', yieldValue: '17.75' },
  { treatment: 4, plantHeight: '17.00', leaves: '8', chlorophyll: '42.19', ndvi: '0.33', yieldValue: '18.91' },
  { treatment: 5, plantHeight: '17.47', leaves: '8', chlorophyll: '42.36', ndvi: '0.38', yieldValue: '22.53' },
];

const laTrinidadFirst: CabbageTreatmentRow[] = [
  { treatment: 1, plantHeight: '35.97', leaves: '11', chlorophyll: '63.13', ndvi: '0.77', yieldValue: '24.53' },
  { treatment: 2, plantHeight: '36.63', leaves: '11', chlorophyll: '61.35', ndvi: '0.79', yieldValue: '23.87' },
  { treatment: 3, plantHeight: '34.23', leaves: '11', chlorophyll: '61.09', ndvi: '0.76', yieldValue: '21.20' },
  { treatment: 4, plantHeight: '36.53', leaves: '11', chlorophyll: '60.91', ndvi: '0.69', yieldValue: '24.53' },
  { treatment: 5, plantHeight: '35.67', leaves: '11', chlorophyll: '61.59', ndvi: '0.78', yieldValue: '25.47' },
];

const laTrinidadSecond: CabbageTreatmentRow[] = [
  { treatment: 1, plantHeight: '25.07', leaves: '12', chlorophyll: '50.74', ndvi: '0.79', yieldValue: '45.31' },
  { treatment: 2, plantHeight: '23.10', leaves: '11', chlorophyll: '51.13', ndvi: '0.74', yieldValue: '36.27' },
  { treatment: 3, plantHeight: '21.83', leaves: '9', chlorophyll: '52.75', ndvi: '0.69', yieldValue: '32.51' },
  { treatment: 4, plantHeight: '20.33', leaves: '10', chlorophyll: '50.46', ndvi: '0.69', yieldValue: '26.67' },
  { treatment: 5, plantHeight: '23.17', leaves: '10', chlorophyll: '52.55', ndvi: '0.77', yieldValue: '32.27' },
];

const laTrinidadThird: CabbageTreatmentRow[] = [
  { treatment: 1, plantHeight: '20.17', leaves: '10', chlorophyll: '47.81', ndvi: '0.52', yieldValue: '24.92' },
  { treatment: 2, plantHeight: '19.33', leaves: '9', chlorophyll: '47.02', ndvi: '0.50', yieldValue: '20.73' },
  { treatment: 3, plantHeight: '14.20', leaves: '8', chlorophyll: '45.65', ndvi: '0.32', yieldValue: '9.21' },
  { treatment: 4, plantHeight: '17.17', leaves: '8', chlorophyll: '46.21', ndvi: '0.42', yieldValue: '16.66' },
  { treatment: 5, plantHeight: '19.90', leaves: '9', chlorophyll: '46.86', ndvi: '0.52', yieldValue: '21.15' },
];

const mankayanFirst: CabbageTreatmentRow[] = [
  { treatment: 1, plantHeight: '26.33', leaves: '12', chlorophyll: '68.36', ndvi: '0.83', yieldValue: '24.80' },
  { treatment: 2, plantHeight: '27.80', leaves: '12', chlorophyll: '69.65', ndvi: '0.81', yieldValue: '25.07' },
  { treatment: 3, plantHeight: '28.33', leaves: '11', chlorophyll: '65.36', ndvi: '0.82', yieldValue: '19.87' },
  { treatment: 4, plantHeight: '26.33', leaves: '11', chlorophyll: '65.10', ndvi: '0.83', yieldValue: '22.53' },
  { treatment: 5, plantHeight: '28.17', leaves: '12', chlorophyll: '64.14', ndvi: '0.84', yieldValue: '21.17' },
];

const mankayanThird: CabbageTreatmentRow[] = [
  { treatment: 1, plantHeight: '10.97', leaves: '7', chlorophyll: '42.68', ndvi: '0.31', yieldValue: '12.96' },
  { treatment: 2, plantHeight: '9.80', leaves: '7', chlorophyll: '42.62', ndvi: '0.33', yieldValue: '11.60' },
  { treatment: 3, plantHeight: '10.17', leaves: '7', chlorophyll: '42.38', ndvi: '0.30', yieldValue: '4.92' },
  { treatment: 4, plantHeight: '13.20', leaves: '10', chlorophyll: '41.87', ndvi: '0.28', yieldValue: '8.62' },
  { treatment: 5, plantHeight: '10.40', leaves: '7', chlorophyll: '41.58', ndvi: '0.30', yieldValue: '8.22' },
];

export const cabbageAtokStats: CabbageLocationStats = {
  location: 'Atok',
  periods: [
    { label: 'First Planting', window: 'December - February', years: '2024-2025', yieldUnit: 'kg/3m²', rows: atokFirst },
    { label: 'Second Planting', window: 'March - June', years: '2025', yieldUnit: 'kg/3m²', rows: atokSecond },
    { label: 'Third Planting', window: 'September - December', years: '2025', yieldUnit: 'kg/3m²', rows: atokThird },
  ],
};

export const cabbageLaTrinidadStats: CabbageLocationStats = {
  location: 'La Trinidad',
  periods: [
    { label: 'First Planting', window: 'December - February', years: '2024-2025', yieldUnit: 'kg/3m²', rows: laTrinidadFirst },
    { label: 'Second Planting', window: 'March - June', years: '2025', yieldUnit: 'kg/3m²', rows: laTrinidadSecond },
    { label: 'Third Planting', window: 'September - December', years: '2025', yieldUnit: 'kg/3m²', rows: laTrinidadThird },
  ],
};

export const cabbageMankayanStats: CabbageLocationStats = {
  location: 'Mankayan',
  periods: [
    { label: 'First Planting', window: 'December - February', years: '2024-2025', yieldUnit: 'ton/ha', rows: mankayanFirst },
    { label: 'Third Planting', window: 'September - December', years: '2025', yieldUnit: 'ton/ha', rows: mankayanThird },
  ],
};