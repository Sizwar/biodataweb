const express = require('express');
const router = express.Router();
const Biodata = require('../models/Biodata');

// GET semua biodata
router.get('/', async (req, res) => {
  try {
    const allBiodata = await Biodata.find();
    res.json(allBiodata);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST tambah biodata baru
router.post('/', async (req, res) => {
  const newBiodata = new Biodata({
    nama: req.body.nama,
    tanggal_lahir: req.body.tanggal_lahir,
    alamat: req.body.alamat,
    foto: req.body.foto,
    deskripsi: req.body.deskripsi
  });

  try {
    const saved = await newBiodata.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET detail biodata by ID
router.get('/:id', async (req, res) => {
  try {
    const bio = await Biodata.findById(req.params.id);
    if (!bio) return res.status(404).json({ message: 'Biodata tidak ditemukan' });
    res.json(bio);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE biodata by ID
router.delete('/:id', async (req, res) => {
  try {
    await Biodata.findByIdAndDelete(req.params.id);
    res.json({ message: 'Biodata berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;