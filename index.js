require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const mainRouter = require('./src/routes/main.routes');
app.use('/', mainRouter);

// ✅ Solo rutas de vehiculo57
app.use('/vehiculo57', require('./src/routes/vehiculo57.routes'));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`http://localhost:${port}`));
