const request = require('request');
const apiKey = '0da14ff81d1b0b99c75c3c338bc67391';
// Cargar express forma parte de la Documentacion
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// ...
// ...app.use(bodyParser.urlencoded({ extended: true }));

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


app.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  request(url, function (err, response, body) {
      if(err){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weather = JSON.parse(body)
        if(weather.main == undefined){
          res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
          let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
          res.render('index', {weather: weatherText, error: null});
        }
      }
    });
  })
  
  const bodyParser = require('body-parser');
// ...
// ...app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log('Example appp listening on port 3000!')
})
