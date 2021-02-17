const Cube = require('../models/Cube');



async function getAll(query) {

    let result = await Cube.find({}).lean();


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
    return Cube.findById(id).lean();

}
function create(data) {
    let cube = new Cube(data);

    return cube.save();
}

module.exports = {
    create,
    getAll,
    findONe
}