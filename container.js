const fs = require('fs').promises;

class Container {
    constructor(path){
        this.path = path;
    }

    async getAll(){
        try{
            const products = await fs.readFile(this.path, 'utf8');
            return JSON.parse(products);
        }catch(error) {
            console.error(error);
        }
    }

    async getRandom(){
        const data = await fs.readFile(this.path, 'utf-8');
        const productos = JSON.parse(data);
        const i = Math.floor(Math.random() * productos.length);
        return productos[i];
    }
}

module.exports=Container;
