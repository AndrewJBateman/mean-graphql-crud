const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");

const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors());

const config = require("./config/config.json");
const dbConnString =
  `mongodb+srv://${config.user}:` +
  `${config.password}@cluster0.pl5l8.mongodb.net/` +
  `${config.dbName}?retryWrites=true&w=majority`;

  // route to access GraphQL in browser
app.use(
	"/graphql",
	graphqlHTTP({
		schema: graphqlSchema,
		rootValue: graphqlResolver,
		graphiql: true,
	})
);

mongoose
	.connect(dbConnString, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then(() => {
		app.listen(3000, console.log("Connected to Port 3000."));
	})
	.catch((err) => console.log(err));
