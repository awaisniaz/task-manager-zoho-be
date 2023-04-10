import express from 'express';
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import cors from 'cors'
// *********************************************************

import userrouters from './routers/users.router'
import './db-connection'
// *********************************************************

const app = express()
const PORT = process.env.PORT || 3000

const typeDefs = `
  type Query {
    goodbye: String
  }
`;

const resolvers = {
    Query: {
        goodbye: () => "Goodbye World"
    }
};
const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

app.use(
    '/graphql',
    graphqlHTTP({
        schema: executableSchema,
        graphiql: true,
    })
)


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userrouters)
app.use((req, res, next) => {
    res.status(200).send({ message: 'Api is not found in system' });
});

app.listen(PORT, () => {
    console.log(`Hello World ❤️❤️❤️❤️❤️❤️❤️❤️}`)
})
