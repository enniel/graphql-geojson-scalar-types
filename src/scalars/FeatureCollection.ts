import { GraphQLScalarType } from 'graphql';

import { parseLiteral } from '../parseLiteral';
import { Validator } from '../validator';

export const FeatureCollection = new GraphQLScalarType({
  name: 'GeoJSONFeatureCollectionScalar',
  serialize: Validator.isFeatureCollection,
  parseValue: Validator.isFeatureCollection,
  parseLiteral: (ast) => Validator.isFeatureCollection(parseLiteral(ast)),
});
