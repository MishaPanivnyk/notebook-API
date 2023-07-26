const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const notebookRoutes = require('./routes/notebookRoutes');

const app = express();
const port = 3000; 

// Подключение к базе данных MongoDB
mongoose.connect('mongodb+srv://panivnykm:bSBaHMb3EmSvH5Hs@cluster0.3nzpl4j.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Ошибка подключения к MongoDB:'));
db.once('open', function () {
  console.log('Успешное подключение к MongoDB');
});

app.use(bodyParser.json());

// Подключение маршрутов для ноутбуков
app.use('/notebooks', notebookRoutes);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
