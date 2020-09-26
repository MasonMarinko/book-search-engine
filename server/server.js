const express = require('express');
const app = express();
const path = require('path');

// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
// -- import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// -- new connect Apollo server middleware with Express 
server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if(process.env.NODE_ENV === 'production'){
  const path  =  require('path');
  app.get('/*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () =>
    console.log(`🌍 Now listening on localhost:${PORT}`));
  
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});