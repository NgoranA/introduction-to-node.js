var express = require('express');
const createError = require("http-errors")
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const articlesRoute = require("./routes/articles")
const bicycleRoute = require("./routes/bicycle")

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articlesRoute);
app.use('/bicycle', bicycleRoute);

const blockedIp = '127.9.124.168'

app.use(function (req, res, next) {
  if (req.socket.remoteAddress === blockedIp) {
    const err = new Error("Forbidden")
    err.statusCode = 403
    next(err)
    return
  }
  next()
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const statusCode = err.status || 500

  res.status(statusCode);
  res.send({
    error: {
      status: statusCode,
      message: err.message,
      stack: req.app.get('env') === 'development' ? err.stack : undefined
    }
  });
});

module.exports = app;
