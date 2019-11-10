import { GraphQLServer } from 'graphql-yoga';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';
import userBasetypeDef from './services/UserInteraction/typeDef';
import userBaseResolvers from './services/UserInteraction/resolver';
const jsonData=require('./services/appSetting.json');
const typeDefs = [
    userBasetypeDef,
];
const resolvers = merge(
    userBaseResolvers,
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
const server = new GraphQLServer({ schema });
server.start(jsonData.graphqlServer, ({ port }) =>
    console.log(
        `Server started, listening on port ${port} for incoming requests.`,
    ));