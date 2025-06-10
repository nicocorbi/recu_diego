const express = require('express');
const router = express.Router();

// Página "Sobre Nosotros"
router.get('/', (req, res) => {
  res.render('about.njk'); // Renderiza la vista "about.ejs"
});

module.exports = router;