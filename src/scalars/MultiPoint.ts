import { GraphQLScalarType } from 'graphql';

import { parseLiteral } from '../parseLiteral';
import { Validator } from '../validator';

export const MultiPoint = new GraphQLScalarType({
  name: 'GeoJSONMultiPointScalar',
  serialize: Validator.isMultiPoint,
  parseValue: Validator.isMultiPoint,
  parseLiteral: (ast) => Validator.isMultiPoint(parseLiteral(ast)),
});
