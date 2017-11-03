# graphql-geojson-scalar-types

GraphQL schema scalar types for GeoJSON. Based on [GeoJSON Validation](https://github.com/craveprogramminginc/GeoJSON-Validation).

## Installation

```bash
npm i -S graphql-geojson-scalar-types
```

or with Yarn:

```bash
yarn add graphql-geojson-scalar-types
```

## Usage

```js
import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { Point } from 'graphql-geojson-scalar-types'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      point: {
        type: Point,
        resolve: () => ({
          type: 'Point',
          coordinates: [-105.01621, 39.57422],
        }),
      },
    }),
  }),
})
```

Then you can query it like this:

```graphql
query {
  point
}
```

## Demo

An example GraphQL server implementation is available here:
[demo](https://github.com/enniel/graphql-geojson-scalar-types/tree/master/demo)
