const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//api routes
app.use('/blogs', graphqlHTTP({
    schema,
    graphiql: true,
}))

const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})

