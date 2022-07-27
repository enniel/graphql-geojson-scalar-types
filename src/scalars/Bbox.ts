import { GraphQLScalarType } from 'graphql';

import { parseLiteral } from '../parseLiteral';
import { Validator } from '../validator';

export const Bbox = new GraphQLScalarType({
  name: 'GeoJSONBboxScalar',
  serialize: Validator.isBbox,
  parseValue: Validator.isBbox,
  parseLiteral: (ast) => Validator.isBbox(parseLiteral(ast)),
});
