//const express = require('express')
const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const dbRouter = jsonServer.router('app/database/database.json')

const config = require('./config')

//const app = express()
const app = jsonServer.create();

//const logger = require('morgan');
//app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(jsonServer.defaults());

app.use('/api',dbRouter);

const port = process.env.PORT || config.app.port;

app.listen(port, () => console.log(`Server app is listening on ${port}...`));

//app.get('/', (req, res) => res.send('Hello World!'))