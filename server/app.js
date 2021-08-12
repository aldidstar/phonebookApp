var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {graphqlHTTP} = require("express-graphql");
const cors = require("cors");
const firebase = require("firebase");

const config = {
    apiKey: "AIzaSyDpjEVTL-nk-XJFFv0XyAR_lF-5DFOR5Ko",
    authDomain: "phonebookapp-4342d.firebaseapp.com",
    databaseURL: "https://phonebookapp-4342d-default-rtdb.firebaseio.com/",
    projectId: "phonebookapp-4342d",
    storageBucket: "phonebookapp-4342d.appspot.com",
    messagingSenderId: "326345857541"
  };
firebase.initializeApp(config);

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/api/phonebooks', apiRouter);

const userSchema = require('./graphql').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: true
}));

module.exports = app;
