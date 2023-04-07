const express = require('express'),
      app = express(),
      routes = require('./routes'),
      path = require('path'),
      expressLayouts = require('express-ejs-layouts'),
      bodyParser = require('body-parser')

//leer formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//habilitar ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

//archivos estaticos
app.use(express.static('public'));

//ubicacion vistas
app.set('views', path.join(__dirname, './views'));

//agregando el ruteo
app.use('/', routes());


app.listen(Number(3002), (error) => {
    if(error){
        console.log(`Error al inicar servicio FE Prueba:' , ${error}`);
        process.exit(1);
    }
    console.log(`Servicio FE "prueba", iniciado en http://localhost:3002`);
}).timeout = 300000;