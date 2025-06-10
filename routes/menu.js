const express = require('express');
const router = express.Router();
const menuData = require('../data/menu');

router.get('/', (req, res) => {
  res.render('vistas.njk', { menu: menuData }); // Cambia a .njk
});

module.exports = router;