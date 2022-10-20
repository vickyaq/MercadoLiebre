// Importar
const express = require('express');
const path = require('path');
const app = express();

//PATH

const publicPath = path.resolve('public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3000

// Levantar el server
app.listen(port, ()=>{
    console.log('Servidor funcionando');
});


app.get('/', (req,res)=>{
    res.sendFile(path.resolve('views/home.html'));
})

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve('views/register.html'));
})

app.post('/',(req,res)=>{
    res.sendFile(path.resolve('views/home.html'));
})

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve('views/login.html'));
})
