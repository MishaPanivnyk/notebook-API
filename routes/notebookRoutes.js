const express = require('express');
const Notebook = require('../models/notebook');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const notebooks = await Notebook.find({});
    res.json(notebooks);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при получении списка ноутбуков' });
  }
});


router.post('/', async (req, res) => {
  const { brand, model, price } = req.body;

  try {
    const newNotebook = new Notebook({ brand, model, price });
    await newNotebook.save();
    res.status(201).json(newNotebook);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при добавлении ноутбука' });
  }
});

module.exports = router;
