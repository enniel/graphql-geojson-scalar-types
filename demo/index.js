import express from 'express';
import graphql from 'express-graphql';
import schema from './schema';

const app = express();
const server = app.listen(8000, () => {
  console.log(`Listening at port ${server.address().port}...`); // eslint-disable-line no-console
});

app.use('/graphql', graphql({
  schema,
  graphiql: true,
}));
