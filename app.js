const path = require('path')
const express = require('express');
const app = express();




app.listen(3030, () => {    // metodo listen de app para levantar el servidor : al ser un metodo necesita parametros : 
    // parametro1 : puerto donde lo queremos inicializar , // parametro2 : callback function 
        console.log('Servidor corriendo')
    });
    

app.get('/', (req, res) => {   // parametro1 ('/') : pad,   // parametro2 : callback que obtiene como argumentos dos argumentos (req,res)
    res.sendFile(path.join(__dirname, '/views/index.html') )
}); 

app.get('/babbage', (req, res) => {   
    res.sendFile(path.join(__dirname, '/views/babbage.html') )

});

app.get('/berners-lee', (req, res) => {   
    res.sendFile(path.join(__dirname, '/views/berners-lee.html') )

});

app.get('/clarke', (req, res) => {   
    res.sendFile(path.join(__dirname, '/views/clarke.html') )

});

app.get('/hamilton', (req, res) => {   
    res.sendFile(path.join(__dirname, '/views/hamilton.html') )

});

app.get('/hopper', (req, res) => {  
    res.sendFile(path.join(__dirname, '/views/hopper.html') )

});

app.get('/lovelace', (req, res) => {   
    res.sendFile(path.join(__dirname, '/views/lovelace.html') )

});

app.get('/turing', (req, res) => {   
    res.sendFile(path.join(__dirname, '/views/turing.html') )

});


app.get('/home', (req, res) => {   
    res.sendFile(path.join(__dirname, '/views/home.html') )

}); 


