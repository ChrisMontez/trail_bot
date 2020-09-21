const http = require('http');
const express = require('express');
const app = express();
require('./db/mongoose')
app.use(require('../src/routers/directory'));

// app.post('/search', (req, res) => {
//   const twiml = new MessagingResponse();

//   twiml.message('This is a test of the Appalachian Trail-Bot.');

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });











http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});


