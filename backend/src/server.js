const express = require('express');
const mongose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();


mongose.connect('mongodb+srv://omnistack:omnistack@cluster0-8lr40.mongodb.net/omnistack8?retryWrites=true&w=majority', {useNewUrlParser: true});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);