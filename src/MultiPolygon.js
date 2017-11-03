import { GraphQLScalarType, GraphQLError } from 'graphql';
const GJV = require('geojson-validation');

import parseLiteral from './parseLiteral';

const validate = value => {
  if (!GJV.isMultiPolygon(value)) {
    throw new GraphQLError(`Expected GeoJSON MultiPolygon but got: ${JSON.stringify(value)}`);
  }
  return value;
};

export default new GraphQLScalarType({
  name: 'GeoJSONMultiPolygonScalar',
  serialize: validate,
  parseValue: validate,
  parseLiteral: ast => validate(parseLiteral(ast))
});
