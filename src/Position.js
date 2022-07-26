import { GraphQLScalarType } from 'graphql';
const GJV = require('geojson-validation');

import parseLiteral from './parseLiteral';
import validator from './validator';

const validate = value => validator(GJV.isPosition,value);


export default new GraphQLScalarType({
  name: 'GeoJSONPositionScalar',
  serialize: validate,
  parseValue: validate,
  parseLiteral: ast => validate(parseLiteral(ast))
});
