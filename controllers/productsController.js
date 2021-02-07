const { Router } = require('express');
const productService = require('../services/productService');
const router = Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
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