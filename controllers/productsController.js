const { Router } = require('express');
const productService = require('../services/productService');
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
    let cube = await productService.findONe(req.params.productId);
    res.render('details', { title: 'Cubicle', cube });
});

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