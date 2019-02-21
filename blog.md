# Microservice Apollo Server in Google Cloud Function using NestJs
'leasing out teslas'
We need a new Microservice for querying and mutating our Tesla inventory, 
so we are going to set up an Apollo graphql server running in 
Google Cloud function using the NestJs framework
### Why? 
MisterGreen using microservices, to keep our architecture maintainable and managable. 
Using microservices, setting up an Appengine service for each service can become expensive, 
so the smaller servicescan be run as Google Cloud Functions
NestJs: We need some structure in our project. 
NestJs provides an angular-like module structure including Dependency Injection.
Apollo server: Most used Graphql javascript framework. Used by many: AirBnb, Medium (you are using it right now!), and ofcourse MisterGreen itself.
https://medium.com/airbnb-engineering/reconciling-graphql-and-thrift-at-airbnb-a97e8d290712
https://medium.engineering/graphql-medium-tech-talk-videos-a4812932abf3


Starting under the assumption that you have a typescript project setup with a tsconfig and a package.json. 
Don't worry, the source of the code used in this blog is available [here] 

`yarn add --dev @nestjs/cli`
`yarn add @nestjs/common @nestjs/core apollo-server-cloud-functions graphql`
`yarn add --dev body-parser` Because its only used for running locally

#### tip:
Use graphql-code-generator to generate typescript interfaces of your Graphql schema:
`yarn add --dev graphql-code-generator graphql-codegen-typescript-common graphql-codegen-typescript-server`
`create codegen.yml` in the root of your project. 
run `yarn gql-gen` to generate types. Make sure your dev-server is running.