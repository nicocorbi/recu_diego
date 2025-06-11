const express = require('express');
const router = express.Router();
const menuData = require('../data/menu');

router.get('/', (req, res) => {
  res.render('vistas.njk', { menu: menuData });
});

// Ruta para detalle de hamburguesa
router.get('/menu/:id', (req, res) => {
  const burger = menuData[req.params.id];
  if (!burger) {
    return res.status(404).send('Hamburguesa no encontrada');
  }
  res.render('detalle.njk', { burger });
});

module.exports = router;