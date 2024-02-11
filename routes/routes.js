const express = require("express");
const router = express.Router();

const { readGetController, readGetFiltrosController } = require('../controllers/index');
const { readGetMiddleware, readGetFiltrosMiddleware } = require('../middlewares/index');

router.get('/joyas', readGetMiddleware, readGetController);
router.get('/joyas/filtros', readGetFiltrosMiddleware, readGetFiltrosController);

module.exports = router;