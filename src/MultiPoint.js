import { GraphQLScalarType } from 'graphql';
const GJV = require('geojson-validation');

import parseLiteral from './parseLiteral';
import validator from './validator';

const validate = value => validator(GJV.isMultiPoint,value);


export default new GraphQLScalarType({
  name: 'GeoJSONMultiPointScalar',
  serialize: validate,
  parseValue: validate,
  parseLiteral: ast => validate(parseLiteral(ast))
});
