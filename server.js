const path = require('path');
const express = require('express');
const app = express();

const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use('/out', express.static(path.join(__dirname, '/public')));
app.use('/static', express.static(path.join(__dirname, '/static')));
app.set('port', process.env.PORT || 1337);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
  res.render('index', {
    bundleUrl: process.env.PORT ? '/out/bundle.js' : 'http://localhost:8080/bundle.js'
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}`);
});
