import {NestFactory} from '@nestjs/core';
import {INestApplicationContext} from '@nestjs/common';
import {AppModule} from './app/app.module';
import {ApolloServer} from 'apollo-server-cloud-functions';

export let context: INestApplicationContext;

export async function bootstrap(): Promise<any> {
  context = await NestFactory.createApplicationContext(AppModule); // Initialize Nest without starting a server (because we're running in GCloud functions)
  const app = context.get(AppModule);
  const server = new ApolloServer({
    typeDefs: app.typeDefs,
    resolvers: app.resolvers,
    playground: true,
    introspection: true
  });
  return server.createHandler();
}
