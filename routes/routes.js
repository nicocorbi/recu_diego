const express = require('express');
const router = express.Router();
const menuData = require('../data/menu');

// Página principal del menú
router.get('/', (req, res) => {
  res.render('menu', { menu: menuData });
});

module.exports = router;