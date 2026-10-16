export type MeasurementUnit = 'ft' | 'm';

interface SiteMeasurements {
  unit: MeasurementUnit;
  width: number;
  length: number;
  builtUpArea: number;
  setbackFront: number;
  setbackRear: number;
  setbackLeft: number;
  setbackRight: number;
}

const METRES_PER_FOOT = 0.3048;

/** Keep the same physical site when changing the displayed measurement unit. */
export function convertSiteMeasurements<T extends SiteMeasurements>(site: T, unit: MeasurementUnit): T {
  if (site.unit === unit) return site;
  const scale = unit === 'm' ? METRES_PER_FOOT : 1 / METRES_PER_FOOT;
  const length = (value: number) => Number((value * scale).toFixed(6));
  return {
    ...site,
    unit,
    width: length(site.width),
    length: length(site.length),
    builtUpArea: Number((site.builtUpArea * scale * scale).toFixed(6)),
    setbackFront: length(site.setbackFront),
    setbackRear: length(site.setbackRear),
    setbackLeft: length(site.setbackLeft),
    setbackRight: length(site.setbackRight),
  };
}
