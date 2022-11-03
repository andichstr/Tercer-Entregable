const express = require('express');
const fs = require('fs').promises;
const container = require('./container');

const filePath = './productos.json';
const miContainer = new container(filePath);
const app = express();
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})
server.on("error", error => console.log(`Error en servidor ${error}`));

app.get('/', (req, res) => {
    res.send("<h1>Dirigirse a /productos o a /randomProducto </h1>")
})

app.get('/productos', (req, res) => {
    miContainer.getAll()
    .then(response => {
        res.send(JSON.stringify(response));
    })
    
})

app.get('/productoRandom', (req, res) => {
    miContainer.getRandom()
    .then(response => {
        res.send(JSON.stringify(response));
    })
})
