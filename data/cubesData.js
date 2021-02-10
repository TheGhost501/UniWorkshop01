const fs = require('fs/promises');
const path = require('path');
let cubes = require('../config/cubesDB.json');

module.exports = {
    getAll() {
        return cubes;
    },
    findOne(id) {
        return cubes.find(x => x.id == id);
    },
    create(cube) {
        cubes.push(cube);

        return fs.writeFile(path.join(__dirname, '../config/cubesDB.json'), 
        JSON.stringify(cubes));
    }
}