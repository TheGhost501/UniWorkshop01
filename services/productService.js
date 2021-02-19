const Accessory = require('../models/Accessory');
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

function findONe(id, accessories) {
    if (accessories === true) {
        return Cube.findById(id).populate('accessories').lean();
    };
    
    return Cube.findById(id).lean();

}
function create(data) {
    let cube = new Cube(data);

    return cube.save();
}

async function attachAccessory(cubeId, accessoryId) {
    let product = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    product.accessories.push(accessory);
    return product.save();
}

module.exports = {
    create,
    getAll,
    findONe,
    attachAccessory
}