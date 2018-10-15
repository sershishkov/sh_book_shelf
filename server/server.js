const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { useNewUrlParser: true},()=>{
  console.log('MongoDB connected');
});
mongoose.set('useCreateIndex', true);
////////////////////////////////////////////////////////////

const { User } = require('./models/User');
const { Book } = require('./models/Book');

/////////////////////////////////////////////////////////////
app.use(bodyParser.json());
app.use(cookieParser());
////////////////////////////////////////////////////////////

 








///////////////////////////////////////////////////////////
const port = process.env.PORT || 3001;
app.listen(port, ()=>{
  console.log(`Server started on port ${port}`);
});