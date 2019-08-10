import { GraphQLScalarType } from 'graphql';
const GJV = require('geojson-validation');

import parseLiteral from './parseLiteral';
import validator from './validator';

const validate = value => validator(GJV.isBbox,value);

export default new GraphQLScalarType({
  name: 'GeoJSONBboxScalar',
  serialize: validate,
  parseValue: validate,
  parseLiteral: ast => validate(parseLiteral(ast))
});
