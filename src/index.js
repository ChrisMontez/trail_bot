const http = require('http');
const express = require('express');
const app = express();
require('./db/mongoose')
app.use(require('../src/routers/directory'));


http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});


