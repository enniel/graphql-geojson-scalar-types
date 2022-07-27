import { GraphQLScalarType } from 'graphql';

import { parseLiteral } from '../parseLiteral';
import { Validator } from '../validator';

export const GeometryCollection = new GraphQLScalarType({
  name: 'GeoJSONGeometryCollectionScalar',
  serialize: Validator.isGeometryCollection,
  parseValue: Validator.isGeometryCollection,
  parseLiteral: (ast) => Validator.isGeometryCollection(parseLiteral(ast)),
});
