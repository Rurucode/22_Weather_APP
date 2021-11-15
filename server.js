// Cargar express forma parte de la Documentacion
const express = require('express');
const app = express();

//Para que express nos deje enlazar un css.
//This code allows us to access all of the static files within the ‘public’ folder
app.use(express.static('public')); 
//Le digo que como sistema de plantillas elijo ejs.
app.set('view engine', 'ejs') 

// Express pasa a JSon, sustituye al body parser
app.use(express.json())

// app.get para hacer foco en un endpoint en concreto.
app.get('/', function (req, res) {
    // res.send('Hola mundo!!!!Servidor arriba.')
    res.render('index')
})

app.listen(3000, function () {
    console.log('Example appp listening on port 3000!')
})

// Hacemos una Post request con el formulario
app.post('/', function (req, res) {
    res.render('index');
    console.log(req.body.city);
  })

  