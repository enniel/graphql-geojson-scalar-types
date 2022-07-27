import { GraphQLScalarType } from 'graphql';

import { parseLiteral } from '../parseLiteral';
import { Validator } from '../validator';

export const Feature = new GraphQLScalarType({
  name: 'GeoJSONFeatureScalar',
  serialize: Validator.isFeature,
  parseValue: Validator.isFeature,
  parseLiteral: (ast) => Validator.isFeature(parseLiteral(ast)),
});
