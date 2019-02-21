import {bootstrap} from './main';

const graphqlHandlerPromise: Promise<Function> = bootstrap();

export const teslaService = async function (...args) {
  const graphQlHandler = await graphqlHandlerPromise;
  return graphQlHandler.apply(this, args);
};


