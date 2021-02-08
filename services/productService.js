const uniqid = require('uniqid');
const Cube = require('../models/Cube');
const fs = require('fs');
const path = require('path');
let cubes = require('../config/cubesDB.json');

function getAll() {
    return cubes;
}

function findONe(id) {
    return cubes.find(x => x.id == id);
}

function createProduct(data) {
    let cube = new Cube(uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel);

    cubes.push(cube);
    fs.writeFile(path.join(__dirname, '../config/cubesDB.json'), JSON.stringify(cubes), (err) => {
        if (err) {
            console.log(err);
            return;
        }
    })
}

module.exports = {
    create: createProduct,
    getAll,
    findONe
}