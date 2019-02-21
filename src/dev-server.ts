import express = require('express');
import * as bodyParser from 'body-parser';
import {bootstrap} from './main';

const app = express();

(async () => {

  // const graphqlHandler = await createGraphqlHandler(typeDefs, resolvers);
  const graphqlHandler = await bootstrap();

  app.use(bodyParser.json());
  app.use('/', graphqlHandler);
  app.listen(8080, () => console.log(`🐞 Devserver listening on localhost:8080`));

})();
