const express = require('express');
const router = express.Router();

// Página "Dónde Encontrarnos"
router.get('/', (req, res) => {
  res.render('location.njk');
});

module.exports = router;