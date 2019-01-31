const express = require('express');
const path = require ('path');
const app = express();
const controller = require('./controllers/controller')
const PORT = 9090;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended:true}));

app.use('/',controller);


app.listen(PORT,(connect)=>{
    console.log(`Connected to ${PORT}`);
});