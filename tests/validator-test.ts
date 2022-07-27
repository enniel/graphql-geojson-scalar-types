import { expect } from 'chai';
import { describe, it } from 'mocha';

import { Validator } from '../src/validator';

import {
  bbox,
  feature,
  featureCollection,
  geometryCollection,
  lineString,
  multiLineString,
  multiPoint,
  multiPolygon,
  point,
  polygon,
} from '../demo/data.json';

describe('Validator', () => {
  it('isBbox', () => {
    expect(Validator.isBbox(bbox)).to.deep.equal(bbox);
    expect(Validator.isBbox([])).to.deep.equal([]);
    expect(() => Validator.isBbox({})).to.throw('bbox must be an array');
    expect(() => Validator.isBbox(null)).to.throw('bbox must be an array');
    expect(() => Validator.isBbox(1)).to.throw('bbox must be an array');
    expect(() => Validator.isBbox([null])).to.throw('bbox, must be a 2*n array');
    expect(() => Validator.isBbox([null, null, null])).to.throw('bbox, must be a 2*n array');
  });

  it('isFeature', () => {
    expect(Validator.isFeature(feature)).to.deep.equal(feature);
    expect(() => Validator.isFeature({})).to.throw('["must have a member with the name \\"type\\"","must have a member with the name \\"properties\\"","must have a member with the name \\"geometry\\""]');
  });

  it('isFeatureCollection', () => {
    expect(Validator.isFeatureCollection(featureCollection)).to.deep.equal(featureCollection);
    expect(() => Validator.isFeatureCollection({})).to.throw('["must have a member with the name \\"type\\"","must have a member with the name \\"Features\\""]');
  });

  it('isGeometryObject', () => {
    expect(Validator.isGeometryObject(point)).to.deep.equal(point);
    expect(Validator.isGeometryObject(polygon)).to.deep.equal(polygon);
    expect(Validator.isGeometryObject(lineString)).to.deep.equal(lineString);
    expect(() => Validator.isGeometryObject({})).to.throw('["must have a member with the name \\"type\\""]');
  });

  it('isGeometryCollection', () => {
    expect(Validator.isGeometryCollection(geometryCollection)).to.deep.equal(geometryCollection);
    expect(() => Validator.isGeometryCollection({})).to.throw('["must have a member with the name \\"type\\"","must have a member with the name \\"geometries\\""]');
  });

  it('isLineString', () => {
    expect(Validator.isLineString(lineString)).to.deep.equal(lineString);
    expect(() => Validator.isLineString({})).to.throw('["must have a member with the name \\"type\\"","must have a member with the name \\"coordinates\\""]');
  });

  it('isMultiLineString', () => {
    expect(Validator.isMultiLineString(multiLineString)).to.deep.equal(multiLineString);
    expect(() => Validator.isMultiLineString({})).to.throw('["must have a member with the name \\"type\\"","must have a member with the name \\"coordinates\\""]');
  });

  it('isMultiPoint', () => {
    expect(Validator.isMultiPoint(multiPoint)).to.deep.equal(multiPoint);
    expect(() => Validator.isMultiPoint({})).to.throw('["must have a member with the name \\"type\\"","must have a member with the name \\"coordinates\\""]');
  });

  it('isMultiPolygon', () => {
    expect(Validator.isMultiPolygon(multiPolygon)).to.deep.equal(multiPolygon);
    expect(() => Validator.isMultiPolygon({})).to.throw('["must have a member with the name \\"type\\"","must have a member with the name \\"coordinates\\""]');
  });

  it('isPoint', () => {
    expect(Validator.isPoint(point)).to.deep.equal(point);
    expect(() => Validator.isPoint({})).to.throw('["must have a member with the name \\"type\\"","must have a member with the name \\"coordinates\\""]');
    expect(() => Validator.isPoint({ type: 'Point' })).to.throw('["must have a member with the name \\"coordinates\\""]');
    expect(() => Validator.isPoint({ type: 'Invalid' })).to.throw('["type must be \\"Point\\"","must have a member with the name \\"coordinates\\""]');
    expect(() => Validator.isPoint({ type: 'Point', coordinates: [] })).to.throw('["Position must be at least two elements"]');
  });

  it('isPolygon', () => {
    expect(Validator.isPolygon(polygon)).to.deep.equal(polygon);
    expect(() => Validator.isPolygon({})).to.throw('["must have a member with the name \\"type\\"","must have a member with the name \\"coordinates\\""]');
  });

  it('isPosition', () => {
    expect(Validator.isPosition(point.coordinates)).to.deep.equal(point.coordinates);
    expect(() => Validator.isPosition({})).to.throw('["Position must be an array"]');
  });
});
