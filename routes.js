const { Router } = require('express');

const productController = require('./controllers/productsController');
const accessoryController = require('./controllers/accessoryController');
const aboutController = require('./controllers/aboutController');

const router = Router();

router.use('/', productController);
router.use('/about', aboutController);
router.use('/accessories', accessoryController);
router.get('*', (req, res) => {
    res.render('404');
})

module.exports = router;