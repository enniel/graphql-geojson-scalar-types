import { GraphQLError } from 'graphql';
import GJV from 'geojson-validation';

type Validate = (geoJSONObject: unknown, trace: boolean) => boolean | string[];

const validate = (isValid: Validate, geoJSONObject: unknown) => {
  const result = isValid(geoJSONObject, true);
  if (Array.isArray(result) && result.length > 0) {
    throw new GraphQLError(JSON.stringify(result));
  }
  return geoJSONObject;
};

export class Validator {
  static isBbox(value: unknown) {
    return validate(GJV.isBbox, value);
  }

  static isFeature(value: unknown) {
    return validate(GJV.isFeature, value);
  }

  static isFeatureCollection(value: unknown) {
    return validate(GJV.isFeatureCollection, value);
  }

  static isGeometryObject(value: unknown) {
    return validate(GJV.isGeometryObject, value);
  }

  static isGeometryCollection(value: unknown) {
    return validate(GJV.isGeometryCollection, value);
  }

  static isLineString(value: unknown) {
    return validate(GJV.isLineString, value);
  }

  static isMultiLineString(value: unknown) {
    return validate(GJV.isMultiLineString, value);
  }

  static isMultiPoint(value: unknown) {
    return validate(GJV.isMultiPoint, value);
  }

  static isMultiPolygon(value: unknown) {
    return validate(GJV.isMultiPolygon, value);
  }

  static isPoint(value: unknown) {
    return validate(GJV.isPoint, value);
  }

  static isPolygon(value: unknown) {
    return validate(GJV.isPolygon, value);
  }

  static isPosition(value: unknown) {
    return validate(GJV.isPosition, value);
  }
}
