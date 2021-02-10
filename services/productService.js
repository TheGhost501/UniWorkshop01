const uniqid = require('uniqid');
const Cube = require('../models/Cube');
const cubeData = require('../data/cubesData');


function getAll(query) {

    // let result = cubeData.getAll();
    let result = Cube.getAll();

    if (query.search) {
        result = result.filter(x => x.name.toLocaleLowerCase().includes(query.search));
    }
    if (query.from) {
        result = result.filter(x => Number(x.level) >= query.from);
    }
    if (query.to) {
        result = result.filter(x => Number(x.level) <= query.to);
    }
    return result;
}

function findONe(id) {
    return cubeData.findOne(id);
}

function create(data) {
    let cube = new Cube(uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
        );

    // return cubeData.create(cube);
    return cube.save();
}

module.exports = {
    create,
    getAll,
    findONe
}