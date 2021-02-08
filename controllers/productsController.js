const { Router } = require('express');
const productService = require('../services/productService');
const router = Router();

router.get('/', (req, res) => {
    let cubes = productService.getAll();
    res.render('home', { title: 'Home', cubes });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', (req, res) => {
    // Need to validate inputs!!
    productService.create(req.body);
    res.redirect('/');
});

router.get('/details/:productId', (req, res) => {
    res.render('details', { title: 'Cubicle' });
});

module.exports = router;