import { GraphQLScalarType } from 'graphql';
const GJV = require('geojson-validation');

import parseLiteral from './parseLiteral';
import validator from './validator';

const validate = value => validator(GJV.isGeometryObject,value);

export default new GraphQLScalarType({
  name: 'GeoJSONGeometryScalar',
  serialize: validate,
  parseValue: validate,
  parseLiteral: ast => validate(parseLiteral(ast))
});
