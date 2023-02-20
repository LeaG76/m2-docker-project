/*
 ┌──────────────────────────────────────────────────────────────────────┐
 │ @name         Docker Swarm | MD5                                     │
 │ @author       Léa Gallier & Kévin Leroux                             │
 │ @version      1.0                                                    │
 │ @created      2023-01-30                                             │
 └──────────────────────────────────────────────────────────────────────┘
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const { cp } = require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);



app.use(express.static(__dirname + '/public'));

app.listen(3012, function () {
  console.log('Example app listening on port 3012!');
  console.log('http://localhost:3012/');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
