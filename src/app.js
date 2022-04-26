const express = require('express'),
 path = require('path'),
 morgan = require('morgan'),
 mysql = require('mysql'),
 myConnection = require('express-myconnection');

const app = express();

//importando rutas
const operacionRoutes = require('./routes/rutoperacion');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// middlewares
app.use(morgan('dev'));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });

  app.use(myConnection(mysql, {
    host: '209.145.60.24',
    user: 'admin_faby',
    password: 'faby2022$#',
    port: 3306,
    database: 'admin_servitec'
  }, 'single'));

  app.use(express.urlencoded({extended: false}));

  //routes
  app.use('/', operacionRoutes);

  


// static files
app.use(express.static(path.join(__dirname, 'public')));
