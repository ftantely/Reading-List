const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const Schema = require('./Schema/Schema');
const cors = require('cors')



const App = express();
App.use(cors());

mongoose.connect('mongodb://test123:test123@ds151702.mlab.com:51702/052120finalfullstack');
mongoose.connection.once('open', () =>{
    console.log('---> 2) Connected to the database')
})


App.listen(8200, ()=>{
    console.log('---> 1) Listening to port 8200')
})

App.use('/graphql', graphqlHTTP({
    schema:Schema,
    graphiql:true

}))