import { GraphQLScalarType } from 'graphql';

import { parseLiteral } from '../parseLiteral';
import { Validator } from '../validator';

export const Polygon = new GraphQLScalarType({
  name: 'GeoJSONPolygonScalar',
  serialize: Validator.isPolygon,
  parseValue: Validator.isPolygon,
  parseLiteral: (ast) => Validator.isPolygon(parseLiteral(ast)),
});
