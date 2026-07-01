export interface TreatmentRow {
  treatment: number;
  plantHeight: string;
  stems: string;
  leaves: string;
  chlorophyll: string;
  ndvi: string;
  yieldPerArea: string;
}

export interface PlantingPeriod {
  label: string;
  window: string;
  years: string;
  rows: TreatmentRow[];
}

export interface LocationPlantingStats {
  location: string;
  periods: PlantingPeriod[];
}

const atokFirst: TreatmentRow[] = [
  { treatment: 1, plantHeight: '27.17', stems: '16', leaves: '110', chlorophyll: '42.47', ndvi: '0.86', yieldPerArea: '20.67' },
  { treatment: 2, plantHeight: '25.67', stems: '12', leaves: '86', chlorophyll: '43.22', ndvi: '0.85', yieldPerArea: '19.60' },
  { treatment: 3, plantHeight: '21.27', stems: '11', leaves: '75', chlorophyll: '43.06', ndvi: '0.83', yieldPerArea: '19.35' },
  { treatment: 4, plantHeight: '27.03', stems: '14', leaves: '95', chlorophyll: '43.51', ndvi: '0.86', yieldPerArea: '21.33' },
  { treatment: 5, plantHeight: '23.97', stems: '16', leaves: '86', chlorophyll: '45.04', ndvi: '0.85', yieldPerArea: '22.93' },
];

const atokSecond: TreatmentRow[] = [
  { treatment: 1, plantHeight: '36.87', stems: '37', leaves: '256', chlorophyll: '47.92', ndvi: '0.89', yieldPerArea: '13.33' },
  { treatment: 2, plantHeight: '44.40', stems: '41', leaves: '290', chlorophyll: '46.73', ndvi: '0.90', yieldPerArea: '14.65' },
  { treatment: 3, plantHeight: '23.34', stems: '40', leaves: '237', chlorophyll: '34.50', ndvi: '0.90', yieldPerArea: '10.85' },
  { treatment: 4, plantHeight: '42.07', stems: '40', leaves: '304', chlorophyll: '45.84', ndvi: '0.91', yieldPerArea: '14.30' },
  { treatment: 5, plantHeight: '43.87', stems: '40', leaves: '292', chlorophyll: '48.14', ndvi: '0.91', yieldPerArea: '18.55' },
];

const atokThird: TreatmentRow[] = [
  { treatment: 1, plantHeight: '13.97', stems: '18', leaves: '104', chlorophyll: '47.31', ndvi: '0.61', yieldPerArea: '9.94' },
  { treatment: 2, plantHeight: '12.40', stems: '16', leaves: '95', chlorophyll: '46.34', ndvi: '0.60', yieldPerArea: '9.77' },
  { treatment: 3, plantHeight: '14.43', stems: '15', leaves: '98', chlorophyll: '46.31', ndvi: '0.59', yieldPerArea: '9.90' },
  { treatment: 4, plantHeight: '14.13', stems: '18', leaves: '107', chlorophyll: '47.74', ndvi: '0.64', yieldPerArea: '11.53' },
  { treatment: 5, plantHeight: '14.20', stems: '14', leaves: '107', chlorophyll: '46.18', ndvi: '0.53', yieldPerArea: '11.48' },
];

const laTrinidadFirst: TreatmentRow[] = [
  { treatment: 1, plantHeight: '29.13', stems: '20', leaves: '131', chlorophyll: '56.31', ndvi: '0.57', yieldPerArea: '4.76' },
  { treatment: 2, plantHeight: '28.93', stems: '17', leaves: '116', chlorophyll: '53.73', ndvi: '0.52', yieldPerArea: '4.03' },
  { treatment: 3, plantHeight: '34.97', stems: '15', leaves: '101', chlorophyll: '53.28', ndvi: '0.47', yieldPerArea: '4.80' },
  { treatment: 4, plantHeight: '28.00', stems: '15', leaves: '104', chlorophyll: '53.28', ndvi: '0.50', yieldPerArea: '3.49' },
  { treatment: 5, plantHeight: '29.87', stems: '17', leaves: '118', chlorophyll: '55.34', ndvi: '0.56', yieldPerArea: '5.76' },
];

const laTrinidadSecond: TreatmentRow[] = [
  { treatment: 1, plantHeight: '39.40', stems: '82', leaves: '579', chlorophyll: '52.52', ndvi: '0.88', yieldPerArea: '57.54' },
  { treatment: 2, plantHeight: '37.40', stems: '49', leaves: '410', chlorophyll: '51.57', ndvi: '0.86', yieldPerArea: '55.40' },
  { treatment: 3, plantHeight: '38.57', stems: '69', leaves: '481', chlorophyll: '52.12', ndvi: '0.88', yieldPerArea: '52.39' },
  { treatment: 4, plantHeight: '34.77', stems: '33', leaves: '284', chlorophyll: '51.22', ndvi: '0.84', yieldPerArea: '47.94' },
  { treatment: 5, plantHeight: '38.47', stems: '71', leaves: '496', chlorophyll: '52.60', ndvi: '0.88', yieldPerArea: '61.12' },
];

const laTrinidadThird: TreatmentRow[] = [
  { treatment: 1, plantHeight: '26.40', stems: '35', leaves: '208', chlorophyll: '51.03', ndvi: '0.62', yieldPerArea: '23.48' },
  { treatment: 2, plantHeight: '22.60', stems: '31', leaves: '182', chlorophyll: '53.13', ndvi: '0.53', yieldPerArea: '20.14' },
  { treatment: 3, plantHeight: '15.63', stems: '28', leaves: '123', chlorophyll: '50.88', ndvi: '0.37', yieldPerArea: '15.72' },
  { treatment: 4, plantHeight: '20.27', stems: '31', leaves: '166', chlorophyll: '50.85', ndvi: '0.47', yieldPerArea: '20.59' },
  { treatment: 5, plantHeight: '25.83', stems: '38', leaves: '233', chlorophyll: '52.44', ndvi: '0.63', yieldPerArea: '19.26' },
];

const mankayanFirst: TreatmentRow[] = [
  { treatment: 1, plantHeight: '27.20', stems: '31', leaves: '218', chlorophyll: '43.84', ndvi: '0.86', yieldPerArea: '12.26' },
  { treatment: 2, plantHeight: '31.53', stems: '31', leaves: '214', chlorophyll: '44.23', ndvi: '0.87', yieldPerArea: '11.98' },
  { treatment: 3, plantHeight: '26.63', stems: '30', leaves: '207', chlorophyll: '42.87', ndvi: '0.86', yieldPerArea: '9.94' },
  { treatment: 4, plantHeight: '27.47', stems: '27', leaves: '230', chlorophyll: '44.05', ndvi: '0.85', yieldPerArea: '10.67' },
  { treatment: 5, plantHeight: '27.07', stems: '28', leaves: '195', chlorophyll: '42.58', ndvi: '0.85', yieldPerArea: '10.32' },
];

const mankayanThird: TreatmentRow[] = [
  { treatment: 1, plantHeight: '18.10', stems: '10', leaves: '61', chlorophyll: '47.87', ndvi: '0.74', yieldPerArea: '7.41' },
  { treatment: 2, plantHeight: '18.40', stems: '11', leaves: '65', chlorophyll: '47.43', ndvi: '0.73', yieldPerArea: '8.81' },
  { treatment: 3, plantHeight: '19.47', stems: '12', leaves: '70', chlorophyll: '47.76', ndvi: '0.73', yieldPerArea: '7.16' },
  { treatment: 4, plantHeight: '17.97', stems: '11', leaves: '64', chlorophyll: '47.24', ndvi: '0.73', yieldPerArea: '7.92' },
  { treatment: 5, plantHeight: '19.53', stems: '11', leaves: '68', chlorophyll: '47.12', ndvi: '0.73', yieldPerArea: '10.28' },
];

export const atokPlantingStats: LocationPlantingStats = {
  location: 'Atok',
  periods: [
    { label: 'First Planting', window: 'December - February', years: '2024-2025', rows: atokFirst },
    { label: 'Second Planting', window: 'March - June', years: '2025', rows: atokSecond },
    { label: 'Third Planting', window: 'September - December', years: '2025', rows: atokThird },
  ],
};

export const laTrinidadPlantingStats: LocationPlantingStats = {
  location: 'La Trinidad',
  periods: [
    { label: 'First Planting', window: 'December - February', years: '2024-2025', rows: laTrinidadFirst },
    { label: 'Second Planting', window: 'March - June', years: '2025', rows: laTrinidadSecond },
    { label: 'Third Planting', window: 'September - December', years: '2025', rows: laTrinidadThird },
  ],
};

export const mankayanPlantingStats: LocationPlantingStats = {
  location: 'Mankayan',
  periods: [
    { label: 'First Planting', window: 'December - February', years: '2024-2025', rows: mankayanFirst },
    { label: 'Third Planting', window: 'September - December', years: '2025', rows: mankayanThird },
  ],
};