import { GraphQLScalarType } from 'graphql';

import { parseLiteral } from '../parseLiteral';
import { Validator } from '../validator';

export const Point = new GraphQLScalarType({
  name: 'GeoJSONPointScalar',
  serialize: Validator.isPoint,
  parseValue: Validator.isPoint,
  parseLiteral: (ast) => Validator.isPoint(parseLiteral(ast)),
});
