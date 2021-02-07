const { Router } = require('express');
const productController = require('./controllers/productsController');
const aboutController = require('./controllers/aboutController');
const router = Router();

router.use('/', productController);
router.use('/about', aboutController);

module.exports = router;