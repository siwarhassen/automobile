//permet de creer une application express
//midlware c'est une fonction dans une app express qui recoit la requete ela reponse qui le gere et qui peut passer
//ensuite a une autre fonction(next)
const express =require('express');  //importer express
const voitureRoutes = require('./routes/voiture');
const userRoutes = require('./routes/user');
const favorisRoutes = require('./routes/favoris');
const commentRoutes = require('./routes/comment');
  const bodyParser = require('body-parser');
  const path = require('path');                //pour le traduire en langage json
const app = express();  //permet de creer une application express

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/automobile',{ useNewUrlParser: true ,useUnifiedTopology: true,});
mongoose.connection.once('open',function(){
  console.log("sa7et");
}).on('open',function(error){
  console.log(error);
})
app.use((req, res, next) => { //pour que les donnees soit accessible pour tout le monde
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(bodyParser.json()); //traduire en json
//ajouter video

app.use(voitureRoutes);
app.use(userRoutes);
app.use(favorisRoutes);
app.use(commentRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));
module.exports = app;
