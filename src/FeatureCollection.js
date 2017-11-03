import { GraphQLScalarType, GraphQLError } from 'graphql';
const GJV = require('geojson-validation');

import parseLiteral from './parseLiteral';

const validate = value => {
  if (!GJV.isFeatureCollection(value)) {
    throw new GraphQLError(`Expected GeoJSON FeatureCollection but got: ${JSON.stringify(value)}`);
  }
  return value;
};

export default new GraphQLScalarType({
  name: 'GeoJSONFeatureCollectionScalar',
  serialize: validate,
  parseValue: validate,
  parseLiteral: ast => validate(parseLiteral(ast))
});
