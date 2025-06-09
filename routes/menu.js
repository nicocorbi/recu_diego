const express = require('express');
const router = express.Router();
const menuData = require('../data/menu'); // Importa los datos del menú desde la carpeta "data"

// Página principal del menú
router.get('/', (req, res) => {
  res.render('vistas', { menu: menuData }); // Renderiza la vista "vistas.ejs" con los datos del menú
});

module.exports = router;