const express = require('express');
const router = express.Router();

// Página "Dónde Encontrarnos"
router.get('/', (req, res) => {
  res.send('<h1>Dónde Encontrarnos</h1><p>Estamos ubicados en España.</p>');
});

module.exports = router;