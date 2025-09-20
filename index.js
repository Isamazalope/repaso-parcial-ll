require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const habitacionRouter = require('./scr/routes/habitacion57.router');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'scr/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Mostrar directamente el sistema de carros en "/"
app.use('/', habitacionRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
