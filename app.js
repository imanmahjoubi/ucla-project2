var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var LocalStrategy = require('passport-local');


//routers
var apiRouter = require('./routes/apiRoutes');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var contactRouter = require('./routes/contacts');
    
var db = require('./models');
var app = express();

// view engine setup
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat', 
  reserve: true, 
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/contacts', contactRouter);

// app.get('/auth', function(req, res) {
//   res.sendFile('auth.html', {root: 'public'});
// });


passport.use(new LocalStrategy(db.User.authenticate));
passport.serializeUser(db.User.serializeUser);
passport.deserializeUser(db.User.deserializeUser);

// app.post('/auth/login', passport.authenticate('local-signup', { successRedirect: '/form', failureRedirect: '/auth'}));

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
