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
} from './data';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      point: {
        type: Point,
        resolve: () => point,
      },
      multiPoint: {
        type: MultiPoint,
        resolve: () => multiPoint,
      },
      lineString: {
        type: LineString,
        resolve: () => lineString,
      },
      multiLineString: {
        type: MultiLineString,
        resolve: () => multiLineString,
      },
      polygon: {
        type: Polygon,
        resolve: () => polygon,
      },
      multiPolygon: {
        type: MultiPolygon,
        resolve: () => multiPolygon,
      },
      feature: {
        type: Feature,
        resolve: () => feature,
      },
      featureCollection: {
        type: FeatureCollection,
        resolve: () => featureCollection,
      },
      geometryCollection: {
        type: GeometryCollection,
        resolve: () => geometryCollection,
      },
    }),
  }),
});
