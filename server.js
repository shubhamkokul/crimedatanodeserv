const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const cors = require('cors');
const config = require('./config');
const routes = require('./src/routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);

const typeDefs = gql`
    type Query {
        greetings : String
    }
`;
const resolvers = {};
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

apolloServer.applyMiddleware({app, path: '/graphql'});

app.listen(config.PORT, () => {
    console.log(`App listening at http://localhost:${config.PORT}`),
        console.log(`GraphQL listening at Endpoint:${apolloServer.graphqlPath}`);
});
