import { GraphQLScalarType } from 'graphql';

import { parseLiteral } from '../parseLiteral';
import { Validator } from '../validator';

export const MultiLineString = new GraphQLScalarType({
  name: 'GeoJSONMultiLineStringScalar',
  serialize: Validator.isMultiLineString,
  parseValue: Validator.isMultiLineString,
  parseLiteral: (ast) => Validator.isMultiLineString(parseLiteral(ast)),
});
