const express = require('express');
const fs = require('fs').promises;

const filePath = './productos.json';
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
    getProductos(filePath)
    .then(response => {
        res.send(JSON.stringify(response));
    })
    
})

app.get('/productoRandom', (req, res) => {
    productoRandom(filePath)
    .then(response => {
        res.send(JSON.stringify(response));
    })
})

async function getProductos(path){
    const productos = await fs.readFile(path);
    return JSON.parse(productos);
}

async function productoRandom(path){
    const data = await fs.readFile(path);
    const productos = JSON.parse(data);
    const i = Math.floor(Math.random() * productos.length);
    return productos[i];
}