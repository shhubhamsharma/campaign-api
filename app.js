var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var campaignRouter =require("./routes/campaign");
var jobs= require("./cronjobs");
var cron = require('cron');

var db = require('./db');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(Cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/campaign', campaignRouter);
var cronJob = cron.job("* */15 * * * *", function(){// runs every 15 minutes
  jobs.executor15();
});
var cronJob1 = cron.job("* */59 * * * *", function(){// runs every 1 hour
  jobs.executorhourly();
  console.info('cron job completed');
});
var cronJob2 = cron.job("0 0 0 * * *", function(){// runs every 15 minutes
  jobs.executordaily();
  console.info('cron job completed');
});


cronJob.start();
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