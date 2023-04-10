"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_1 = require("@graphql-tools/schema");
const cors_1 = __importDefault(require("cors"));
// *********************************************************
const users_router_1 = __importDefault(require("./routers/users.router"));
require("./db-connection");
// *********************************************************
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
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
const executableSchema = (0, schema_1.makeExecutableSchema)({
    typeDefs,
    resolvers,
});
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: executableSchema,
    graphiql: true,
}));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/user', users_router_1.default);
app.use((req, res, next) => {
    res.status(200).send({ message: 'Api is not found in system' });
});
app.listen(PORT, () => {
    console.log(`Hello World ❤️❤️❤️❤️❤️❤️❤️❤️}`);
});
//# sourceMappingURL=index.js.map