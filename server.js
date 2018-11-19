const express = require('express');
const app = express();
const path = require('path');

app.search(express.static(__dirname + '/dist/q2assignment-heroku'));
app.listen(process.env.PORT || 8080);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/q2assignment-heroku/index.html'));
});

console.log('Console Listening');
