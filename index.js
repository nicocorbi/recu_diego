const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();
const PORT = 3000;

// Configuración de Nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app
});

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Importar rutas
const menuRoutes = require('./routes/menu');
const aboutRoutes = require('./routes/about');
const locationRoutes = require('./routes/location');

// Usar rutas
app.use('/', menuRoutes);
app.use('/about', aboutRoutes);
app.use('/location', locationRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});