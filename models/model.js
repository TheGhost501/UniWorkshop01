const fs = require('fs/promises');
const path = require('path');
let cubes = require('../config/cubesDB.json');

class Model {

    save() {

        cubes.push(this);

        return fs.writeFile(path.join(__dirname, '../config/cubesDB.json'),
            JSON.stringify(cubes));
    }

    static getAll() {
        return cubes;
    }

    static findOne(id) {
        return cubes.find(x => x.id == id);
    }
}

module.exports = Model; 