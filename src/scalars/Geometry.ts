import { GraphQLScalarType } from 'graphql';

import { parseLiteral } from '../parseLiteral';
import { Validator } from '../validator';

export const Geometry = new GraphQLScalarType({
  name: 'GeoJSONGeometryScalar',
  serialize: Validator.isGeometryObject,
  parseValue: Validator.isGeometryObject,
  parseLiteral: (ast) => Validator.isGeometryObject(parseLiteral(ast)),
});
