const uniqid = require('uniqid');
const Cube = require('../models/Cube');
const fs = require('fs');
let cubes = require('../config/cubesDB.json');


function createProduct(data){
    let cube = new Cube(uniqid(),
    data.name,
    data.description,
    data.imageUrl,
    data.difficultyLevel);

    cubes.push(cube);
    fs.writeFile(__dirname + '/../config/cubesDB.json', JSON.stringify(cubes), (err) => {
        if (err) {
            console.log(err);
            return;
        }
    } )
}

module.exports = {
    create: createProduct
}