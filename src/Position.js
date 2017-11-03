import { GraphQLScalarType, GraphQLError } from 'graphql';
const GJV = require('geojson-validation');

import parseLiteral from './parseLiteral';

const validate = value => {
  if (!GJV.isPosition(value)) {
    throw new GraphQLError(`Expected GeoJSON Position but got: ${JSON.stringify(value)}`);
  }
  return value;
};

export default new GraphQLScalarType({
  name: 'GeoJSONPositionScalar',
  serialize: validate,
  parseValue: validate,
  parseLiteral: ast => validate(parseLiteral(ast))
});
