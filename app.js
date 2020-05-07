const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors=require('cors');

const app = express();
app.use(cors());

mongoose.connect(`mongodb+srv://vlad:qwertydb@graphql-ufv58.mongodb.net/test?retryWrites=true&w=majority`,
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
 .then(() => console.log('Connected to MongoDB Atlas'))
 .catch(err => console.log('Error: ', err.message));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=> {
    console.log('I`m listening 4000 port')
})
