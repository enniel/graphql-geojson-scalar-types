import { GraphQLScalarType } from 'graphql';

import { parseLiteral } from '../parseLiteral';
import { Validator } from '../validator';

export const MultiPolygon = new GraphQLScalarType({
  name: 'GeoJSONMultiPolygonScalar',
  serialize: Validator.isMultiPolygon,
  parseValue: Validator.isMultiPolygon,
  parseLiteral: (ast) => Validator.isMultiPolygon(parseLiteral(ast)),
});
