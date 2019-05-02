var express = require('express');
var path = require('path');
var BodyParser = require('body-parser');

// 合并路由配置
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var routers = require('./routes/routers');

var app = express();

// 设置视图文件夹位置
app.set('views', path.join(__dirname, 'views'));

// 设置模板引擎
app.engine('art', require('express-art-template'));
// app.engine('xxx', function(){
//    自定义模板引擎
// })

app.use(express.static(path.join(__dirname, 'public')));

// 定义一个中间件 时间 74:30
// 使用body-parse 处理 application/x-www-form 的请求
app.use(BodyParser.urlencoded({extended:true}));
// 使用body-parse 处理 application/json 的请求
app.use(BodyParser.json());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', routers);

module.exports = app;
// -----------------------------------------------------

// // 初始化模板
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error.pug');
// });

// module.exports = app;
