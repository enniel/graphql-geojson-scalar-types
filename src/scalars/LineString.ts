import { GraphQLScalarType } from 'graphql';

import { parseLiteral } from '../parseLiteral';
import { Validator } from '../validator';

export const LineString = new GraphQLScalarType({
  name: 'GeoJSONLineStringScalar',
  serialize: Validator.isLineString,
  parseValue: Validator.isLineString,
  parseLiteral: (ast) => Validator.isLineString(parseLiteral(ast)),
});
