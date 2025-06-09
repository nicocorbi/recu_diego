const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Importar rutas
const menuRoutes = require('./routes/menu'); // Ruta para el menú
const aboutRoutes = require('./routes/about'); // Ruta para "Sobre Nosotros"
const locationRoutes = require('./routes/location'); // Ruta para "Dónde Encontrarnos"

// Configurar rutas
app.use('/', menuRoutes);
app.use('/about', aboutRoutes);
app.use('/location', locationRoutes);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});