declare module 'geojson-validation' {
  export function valid(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isGeometryObject(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isPoint(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isMultiPointCoor(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isMultiPoint(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isLineStringCoor(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isLineString(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isMultiLineStringCoor(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isMultiLineString(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isPolygonCoor(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isPolygon(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isMultiPolygonCoor(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isMultiPolygon(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isGeometryCollection(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isFeature(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isFeatureCollection(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isBbox(geoJSONObject: unknown, trace: boolean): boolean | string[];
  export function isPosition(geoJSONObject: unknown, trace: boolean): boolean | string[];
}
