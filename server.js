// install express server

const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/star-admin-angular'));

app.get('/*', function (req,res) {
  res.sendFile(path.join(__dirname+ '/dist/star-admin-angular/index.html'));
});

app.listen(process.env.PORT || 8080);
console.log('Production server listing at 4200');
console.log('Started DLC UI ...');
