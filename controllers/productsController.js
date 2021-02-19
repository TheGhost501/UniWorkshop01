const { Router } = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');
const router = Router();

router.get('/', (req, res) => {
productService.getAll(req.query)
    .then(cubes => {
        res.render('home', { title: 'Home', cubes });
    })
    .catch(() => res.status(500).end());

});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', validateProduct, (req, res) => {
    productService.create(req.body)
        .then(() => res.redirect('./'))
        .catch(() => res.status(500).end());

});

router.get('/details/:productId', async (req, res) => {
    let cube = await productService.findONe(req.params.productId, true);
    res.render('details', { title: 'Cubicle', cube });
});

router.get('/:productId/attach', async (req, res) => {
    let cube = await productService.findONe(req.params.productId);
    let accessories = await accessoryService.getAllAvailable(cube.accessories);
    res.render('attachAccessory', {cube, accessories});
})

router.post('/:productId/attach', (req, res) => {
    productService.attachAccessory(req.params.productId, req.body.accessory)
    .then(() => res.redirect(`/details/${req.params.productId}`));
})

function validateProduct(req, res, next) {
    let isValid = true;

    if (req.body.name.trim().length < 2) {
        isValid = false;
    } else if (!req.body.imageUrl) {
        isValid = false;
    }
    if (isValid) {
        next();
    }
}

module.exports = router;