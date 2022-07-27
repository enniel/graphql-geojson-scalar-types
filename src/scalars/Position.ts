import { GraphQLScalarType } from 'graphql';

import { parseLiteral } from '../parseLiteral';
import { Validator } from '../validator';

export const Position = new GraphQLScalarType({
  name: 'GeoJSONPositionScalar',
  serialize: Validator.isPosition,
  parseValue: Validator.isPosition,
  parseLiteral: (ast) => Validator.isPosition(parseLiteral(ast)),
});
