const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

//Aquí debajo van las rutas que deben utilizarse

router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.detail);
router.post('/create', moviesController.create);
router.delete('/delete/:id', moviesController.destroy);

module.exports = router;