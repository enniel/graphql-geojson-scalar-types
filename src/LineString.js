import { GraphQLScalarType, GraphQLError } from 'graphql';
const GJV = require('geojson-validation');

import parseLiteral from './parseLiteral';

const validate = value => {
  if (!GJV.isLineString(value)) {
    throw new GraphQLError(`Expected GeoJSON LineString but got: ${JSON.stringify(value)}`);
  }
  return value;
};

export default new GraphQLScalarType({
  name: 'GeoJSONLineStringScalar',
  serialize: validate,
  parseValue: validate,
  parseLiteral: ast => validate(parseLiteral(ast)),
});
