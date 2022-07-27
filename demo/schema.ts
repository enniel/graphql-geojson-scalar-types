import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';
import {
  Point,
  MultiPoint,
  LineString,
  MultiLineString,
  Polygon,
  MultiPolygon,
  GeometryCollection,
  Feature,
  FeatureCollection,
} from '../src';
import {
  point,
  multiPoint,
  lineString,
  multiLineString,
  polygon,
  multiPolygon,
  feature,
  featureCollection,
  geometryCollection,
} from './data.json';

const invalid = {
  type: 'Invalid',
};

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      point: {
        type: Point,
        resolve: () => point,
      },
      pointInvalid: {
        type: Point,
        resolve: () => invalid,
      },
      multiPoint: {
        type: MultiPoint,
        resolve: () => multiPoint,
      },
      multiPointInvalid: {
        type: MultiPoint,
        resolve: () => invalid,
      },
      lineString: {
        type: LineString,
        resolve: () => lineString,
      },
      lineStringInvalid: {
        type: LineString,
        resolve: () => invalid,
      },
      multiLineString: {
        type: MultiLineString,
        resolve: () => multiLineString,
      },
      multiLineStringInvalid: {
        type: MultiLineString,
        resolve: () => invalid,
      },
      polygon: {
        type: Polygon,
        resolve: () => polygon,
      },
      polygonInvalid: {
        type: Polygon,
        resolve: () => invalid,
      },
      multiPolygon: {
        type: MultiPolygon,
        resolve: () => multiPolygon,
      },
      multiPolygonInvalid: {
        type: MultiPolygon,
        resolve: () => invalid,
      },
      feature: {
        type: Feature,
        resolve: () => feature,
      },
      featureInvalid: {
        type: Feature,
        resolve: () => invalid,
      },
      featureCollection: {
        type: FeatureCollection,
        resolve: () => featureCollection,
      },
      featureCollectionInvalid: {
        type: FeatureCollection,
        resolve: () => invalid,
      },
      geometryCollection: {
        type: GeometryCollection,
        resolve: () => geometryCollection,
      },
      geometryCollectionInvalid: {
        type: GeometryCollection,
        resolve: () => invalid,
      },
    }),
  }),
});
